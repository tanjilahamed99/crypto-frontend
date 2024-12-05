"use client";

import { useAddress, useSigner, useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";

const SendLotteryPayment = ({
  isEthPayment,
  userId,
  refetchAll,
  price,
  wallet,
}) => {
  const address = useAddress(); // Get user's wallet address
  const signer = useSigner(); // Get signer to send transactions
  const { data: user } = useSession();

  console.log(wallet);

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
          to: wallet,
          value: ethers.utils.parseEther(ETH_PRICE),
        });
        await tx.wait();
        console.log(tx);
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: " + error.message);
    }
  };

  return (
    <button
      className="bg-green-500 hover:bg-green-700 py-2 px-5 rounded-md"
      onClick={handleBuy}
    >
      hello
    </button>
  );
};

export default SendLotteryPayment;
