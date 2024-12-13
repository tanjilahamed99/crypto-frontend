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

const ActiveProgram = ({
  isEthPayment,
  programData,
  price,
  proRefetch,
  id,
}) => {
  const address = useAddress(); // Get user's wallet address
  const signer = useSigner(); // Get signer to send transactions
  const { data: user } = useSession();
  const [myCartData, refetch] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });
  const [isLoading, setIsLoading] = useState(false);
  const date = Date();
  const [websiteData] = useGetWebsiteData();

  const handleBuy = async () => {
    if (!address || !signer) {
      Swal.fire({
        icon: "info",
        title: "Wallet not connected",
        text: "Please connect your wallet before proceeding.",
      });
      return;
    }
    setIsLoading(true);
    try {
      if (isEthPayment) {
        // ETH Payment
        const tx = await signer.sendTransaction({
          to: websiteData?.wallets?.proProgram,
          value: ethers.utils.parseEther(price),
        });
        await tx.wait();

        if (tx) {
          let mainData = [];

          if (myCartData?.result?.proProgram?.length > 0) {
            mainData = [
              {
                history: tx,
                ...programData,
              },
              ...myCartData?.result?.proProgram,
            ];
          } else {
            mainData = [
              {
                history: tx,
                ...programData,
              },
            ];
          }
          const { data } = await axios.post(
            `${BASE_URL}/lottery/${user?.user?._id}/${address}`,
            { proProgram: mainData }
          );

          if (data?.status) {
            const newProgramData = {
              users: [],
            };

            if (programData?.users?.length > 0) {
              newProgramData.users = [
                ...programData?.users,
                { userId: user?.user?._id, wallet: user?.user?.wallet },
              ];
            } else {
              newProgramData.users = [
                { userId: user?.user?._id, wallet: user?.user?.wallet },
              ];
            }
            const url = `${BASE_URL}/buyProgram/${id}`;
            const { data: result } = await axios.put(url, newProgramData);
            if (result?.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Transaction Completed",
                text: "Your purchase was successful!",
              });
              refetch();
              proRefetch();
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

      // Custom error handling
      let errorMessage = error.message;
      if (error.code === "INSUFFICIENT_FUNDS") {
        errorMessage =
          "You have insufficient funds to complete this transaction.";
      }

      Swal.fire({
        icon: "error",
        title: "Transaction Failed",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleBuy}
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
      >
        Activate
      </button>
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

export default ActiveProgram;
