"use client";

import { BASE_URL } from "@/constant/constant";
import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";
import { useAddress, useSigner, useContract } from "@thirdweb-dev/react";
import axios from "axios";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const ActiveProgram = ({ isEthPayment }) => {
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
        alert("tx completed");
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: " + error.message);
    }
  };
  return (
    <button
      onClick={handleBuy}
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
    >
      Activate
    </button>
  );
};

export default ActiveProgram;
