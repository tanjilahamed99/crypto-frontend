"use client";

import { BASE_URL } from "@/constant/constant";
import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";
import { useAddress, useSigner, useContract } from "@thirdweb-dev/react";
import axios from "axios";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const BuyButton = ({ isEthPayment, lotteryData, id, refetchAll }) => {
  const address = useAddress(); // Get user's wallet address
  const signer = useSigner(); // Get signer to send transactions
  const { data: user } = useSession();
  const [myCartData, refetch] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });

  const ADMIN_ADDRESS = "0xa2D5c51A941ea7c1CA1c72748bD301a873F5A7df"; // Admin address
  const ETH_PRICE = "0.001"; // ETH price

  const handleBuy = async () => {
    if (!address || !signer) {
      alert("Connect your wallet first!");
      return;
    }
    try {
      if (isEthPayment) {
        // ETH Payment
        const tx = await signer.sendTransaction({
          to: ADMIN_ADDRESS,
          value: ethers.utils.parseEther(ETH_PRICE),
        });
        await tx.wait();
        if (tx) {
          let mainData = [];

          if (myCartData?.result?.lottery?.length > 0) {
            mainData = [
              {
                history: tx,
                ...lotteryData,
              },
              ...myCartData?.result?.lottery,
            ];
          } else {
            mainData = [
              {
                history: tx,
                ...lotteryData,
              },
            ];
          }
          const { data } = await axios.post(
            `${BASE_URL}/lottery/${user?.user?._id}/${address}`,
            { lottery: mainData }
          );
          if (data?.status) {
            const newLotteryData = {
              users: [],
              remaining: parseFloat(lotteryData?.remaining) - 1,
              sell: parseFloat(lotteryData?.sell) + 1,
              quantity: parseFloat(lotteryData?.quantity) - 1,
            };

            if (lotteryData?.users?.length > 0) {
              newLotteryData.users = [
                ...lotteryData?.users,
                { userId: user?.user?._id, wallet: user?.user?.wallet },
              ];
            } else {
              newLotteryData.users = [
                { userId: user?.user?._id, wallet: user?.user?.wallet },
              ];
            }

            const url = `${BASE_URL}/buyLottery/${id}`;
            const { data } = await axios.put(url, newLotteryData);

            if (data?.result?.modifiedCount > 0) {
              Swal.fire({
                title: "Good job!",
                text: "Lottery Ticket Completed",
                icon: "success",
              });
              refetch();
              refetchAll();
            }
          }
        }
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: " + error.message);
    }
  };

  return (
    <button
      className="text-lg font-semibold bg-primary text-white rounded-xl px-3 py-1 hover:bg-green-700"
      onClick={handleBuy}
    >
      Join
    </button>
  );
};

export default BuyButton;
