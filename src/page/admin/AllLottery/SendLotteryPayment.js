"use client";

import { BASE_URL } from "@/constant/constant";
import { useAddress, useSigner, useContract } from "@thirdweb-dev/react";
import axios from "axios";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";

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

  const ETH_PRICE = "0.001"; // ETH price

  // console.log(id);

  console.log(winners);

  const handleBuy = async () => {
    if (!address || !signer) {
      alert("Connect your wallet first!");
      return;
    }
    try {
      if (isEthPayment) {
        // ETH Payment
        const tx = await signer.sendTransaction({
          to: wallet,
          value: ethers.utils.parseEther(ETH_PRICE),
        });
        await tx.wait();
        // console.log(tx);
        if (tx) {
          const main = winners?.filter((user) => user?.userId !== userId);
          const mainWinnersList = [
            {
              userId,
              wallet,
              history: tx,
              payment: "Completed",
              amount: 0.03,
            },
            ...main,
          ];

          const { data } = await axios.post(
            `${BASE_URL}/admin/sendLotteryPayment/${user?.user._id}/${user?.user?.email}/${user?.user?.wallet}/${id}`,
            mainWinnersList
          );
          console.log(data);
          if (data?.result?.modifiedCount > 0) {
            refetchAll();
          }
        }
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: " + error.message);
    }
  };

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
    </>
  );
};

export default SendLotteryPayment;
