"use client";

import { BASE_URL } from "@/constant/constant";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";
import { useAddress, useSigner } from "@thirdweb-dev/react";
import axios from "axios";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Swal from "sweetalert2";

const BuyGamingNft = ({ isEthPayment, lotteryData, id, refetchAll, price }) => {
  const address = useAddress(); // Get user's wallet address
  const signer = useSigner(); // Get signer to send transactions
  const { data: user } = useSession();
  const [myCartData, refetch] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });
  const [websiteData] = useGetWebsiteData();
  const [isLoading, setIsLoading] = useState(false);
  const date = Date();

  const handleBuy = async () => {
    if (!address || !signer) {
      alert("Connect your wallet first!");
      return;
    }
    setIsLoading(true);
    try {
      if (isEthPayment) {
        // ETH Payment
        const tx = await signer.sendTransaction({
          to: websiteData?.wallets?.lottery,
          value: ethers.utils.parseEther(price),
        });
        await tx.wait();
        if (tx) {
          let mainData = [];

          if (myCartData?.result?.gamingNft?.length > 0) {
            mainData = [
              {
                history: tx,
                ...lotteryData,
                date,
              },
              ...myCartData?.result?.gamingNft,
            ];
          } else {
            mainData = [
              {
                history: tx,
                ...lotteryData,
                date,
              },
            ];
          }

          const { data } = await axios.post(
            `${BASE_URL}/lottery/${user?.user?._id}/${address}`,
            { gamingNft: mainData }
          );

          if (data?.status) {
            const newLotteryData = {
              users: [],
              sell: parseFloat(lotteryData?.sell) + 1,
              quantity: parseFloat(lotteryData?.quantity) - 1,
            };

            if (lotteryData?.users?.length > 0) {
              newLotteryData.users = [
                ...lotteryData?.users,
                { userId: user?.user?._id, wallet: user?.user?.wallet, date },
              ];
            } else {
              newLotteryData.users = [
                { userId: user?.user?._id, wallet: user?.user?.wallet, date },
              ];
            }

            const url = `${BASE_URL}/buyGamingNft/${id}`;
            const { data } = await axios.put(url, newLotteryData);

            if (data?.result?.modifiedCount > 0) {
              Swal.fire({
                title: "Good job!",
                text: "Gaming NFT Buy Completed",
                icon: "success",
              });
              refetch();
              refetchAll();
            }
          }

          let history = [];

          if (websiteData?.totalDeposit?.length > 0) {
            history = [
              {
                history: tx,
                userId: user?.user?._id,
                wallet: address,
                amount: parseFloat(price),
                date,
              },
              ...websiteData?.totalDeposit,
            ];
          } else {
            history = [
              {
                history: tx,
                userId: user?.user?._id,
                wallet: address,
                amount: parseFloat(price),
                date,
              },
            ];
          }

          const mainHistory = {
            totalDeposit: history,
          };

          const { data: historyData } = await axios.post(
            `${BASE_URL}/history`,
            mainHistory
          );
        }
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isEthPayment && (
        <button
          className="text-lg flex justify-center mx-auto font-semibold bg-primary text-white rounded-xl px-3 py-1 hover:bg-green-700"
          onClick={handleBuy}
        >
          Buy
        </button>
      )}
      {/* Loading Modal */}
      {isLoading && (
        <dialog id="loading_modal" className="modal" open>
          <div className="modal-box">
            <span className="loading loading-spinner loading-lg flex justify-center mx-auto"></span>
            <h3 className="font-bold text-lg">Processing...</h3>
            <p className="py-4">
              Your transaction is being processed. Please wait...
            </p>
          </div>
        </dialog>
      )}
    </>
  );
};

export default BuyGamingNft;
