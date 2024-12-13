"use client";

import { BASE_URL } from "@/constant/constant";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import { useAddress, useSigner } from "@thirdweb-dev/react";
import axios from "axios";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Swal from "sweetalert2";

const SendLotteryPayment = ({
  isEthPayment,
  userId,
  refetchAll,
  price,
  wallet,
  id,
  winners,
  winnerData,
}) => {
  const address = useAddress(); // Get user's wallet address
  const signer = useSigner(); // Get signer to send transactions
  const { data: user } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const date = Date();
  const [websiteData, refetch] = useGetWebsiteData();

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
          to: wallet,
          value: ethers.utils.parseEther(price),
        });
        await tx.wait();
        if (tx) {
          const main = winners?.filter((user) => user?.userId !== userId);
          const mainWinnersList = [
            {
              userId,
              wallet,
              history: tx,
              payment: "Completed",
              amount: price,
              date,
              reword: parseFloat(price),
            },
            ...main,
          ];

          const { data } = await axios.post(
            `${BASE_URL}/admin/sendLotteryPayment/${user?.user._id}/${user?.user?.email}/${user?.user?.wallet}/${id}`,
            mainWinnersList
          );
          if (data?.result?.modifiedCount > 0) {
            refetchAll();
            Swal.fire({
              title: "Good job!",
              text: "Payment send Success",
              icon: "success",
            });
          }

          let history = [];
          const lotteryHistory = [];

          if (websiteData?.totalWithdrawal?.length > 0) {
            history = [
              {
                history: tx,
                userId: user?.user?._id,
                wallet: address,
                amount: parseFloat(price),
                date,
              },
              ...websiteData?.totalWithdrawal,
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
          if (websiteData?.totalLotteryWithdrawal?.length > 0) {
            history = [
              {
                history: tx,
                userId: user?.user?._id,
                wallet: address,
                amount: parseFloat(price),
                date,
              },
              ...websiteData?.totalLotteryWithdrawal,
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
            totalWithdrawal: history,
            totalLotteryWithdrawal: lotteryHistory,
          };

          const { data: historyData } = await axios.post(
            `${BASE_URL}/history`,
            mainHistory
          );
          if (historyData?.status) {
            refetch();
          }
        }
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleBuy = async () => {
  //   if (!address || !signer) {
  //     alert("Connect your wallet first!");
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     // Fetch the real-time BNB price
  //     const bnbPriceInUSD = await fetchBNBPrice();
  //     if (!bnbPriceInUSD) {
  //       alert("Unable to fetch BNB price. Please try again.");
  //       return;
  //     }

  //     // Calculate the reward amount in BNB
  //     const rewardInBNB = price / bnbPriceInUSD;

  //     // Send BNB payment
  //     const tx = await signer.sendTransaction({
  //       to: wallet,
  //       value: ethers.utils.parseEther(rewardInBNB.toFixed(18)), // Ensure precision
  //     });

  //     await tx.wait();

  //     if (tx) {
  //       // Update winners list
  //       const main = winners?.filter((user) => user?.userId !== userId);
  //       const mainWinnersList = [
  //         {
  //           userId,
  //           wallet,
  //           history: tx,
  //           payment: "Completed",
  //           amount: rewardInBNB,
  //           date,
  //         },
  //         ...main,
  //       ];

  //       // Update backend
  //       const { data } = await axios.post(
  //         `${BASE_URL}/admin/sendLotteryPayment/${user?.user._id}/${user?.user?.email}/${user?.user?.wallet}/${id}`,
  //         mainWinnersList
  //       );

  //       console.log(data);

  //       if (data?.result?.modifiedCount > 0) {
  //         refetchAll();
  //         setReValidate(true);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Transaction failed:", error);
  //     alert("Transaction failed: " + error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <>
      {winnerData?.payment === "Completed" ? (
        <button className="bg-green-500  py-2 px-5 rounded-md cursor-text">
          Completed
        </button>
      ) : (
        <button
          className="bg-green-500 hover:bg-green-700 py-2 px-5 rounded-md"
          onClick={handleBuy}
        >
          Send
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

export default SendLotteryPayment;
