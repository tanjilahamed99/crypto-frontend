"use client";

import { BASE_URL } from "@/constant/constant";
import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";
import { useAddress, useSigner, useContract } from "@thirdweb-dev/react";
import axios from "axios";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const ActiveProgram = ({ isEthPayment, programData, price, proRefetch, id }) => {
  const address = useAddress(); // Get user's wallet address
  const signer = useSigner(); // Get signer to send transactions
  const { data: user } = useSession();
  const [myCartData, refetch] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });

  const ADMIN_ADDRESS = "0xd4835Bc8a235Cc6Ecd6274A06B40495331310F01"; // Admin address
  const ETH_PRICE = "0.0001"; // ETH price

  const handleBuy = async () => {
    if (!address || !signer) {
      Swal.fire({
        icon: "info",
        title: "Wallet not connected",
        text: "Please connect your wallet before proceeding.",
      });
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
            const { data } = await axios.put(url, newProgramData);


            console.log(data)


            if (data?.result?.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Transaction Completed",
                text: "Your purchase was successful!",
              });
              // refetch();
              // refetchAll();
            }
          }
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
