"use client";

import { BASE_URL } from "@/constant/constant";
import { useAddress, useSigner } from "@thirdweb-dev/react";
import axios from "axios";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useState } from "react";

const SendRoyaltyPayment = ({
  isEthPayment,
  lotteryData,
  id,
  refetchAll,
  price,
  mainData,
  userId,
  wallet,
}) => {
  const [isLoading, setIsLoading] = useState(false); // State for modal visibility
  const address = useAddress(); // Get user's wallet address
  const signer = useSigner(); // Get signer to send transactions
  const { data: user } = useSession();
  const ETH_PRICE = "0.001"; // ETH price
  const date = Date();

  const handleBuy = async () => {
    if (!address || !signer) {
      alert("Connect your wallet first!");
      return;
    }
    setIsLoading(true); // Show loading modal
    try {
      if (isEthPayment) {
        // ETH Payment
        const tx = await signer.sendTransaction({
          to: wallet,
          value: ethers.utils.parseEther(ETH_PRICE),
        });
        await tx.wait();
        console.log(tx);

        if (tx) {
          const newData = {
            price: mainData?.price,
            quantity: mainData?.quantity,
            users: [],
          };

          if (mainData.users.length > 1) {
            const existUsers = mainData?.user?.filter(
              (item) => item?.userId !== user
            );
            newData.users = [
              { userId, wallet, history: tx, date, status: "Completed" },
              ...existUsers,
            ];
          } else {
            newData.users = [
              { userId, wallet, history: tx, date, status: "Completed" },
            ];
          }

          try {
            const url = `${BASE_URL}/admin/proprogram/${user?.user?._id}/${user?.user?.email}/${user?.user?.wallet}/${id}`;
            const { data } = await axios.put(url, newData);
            console.log(data);
            if (data?.result?.modifiedCount > 0) {
              refetchAll();

              Swal.fire({
                title: "Good job!",
                text: "Payment send Completed",
                icon: "success",
              });
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    } catch (error) {
      console.error("Transaction failed:", error);
      alert("Transaction failed: " + error.message);
    } finally {
      setIsLoading(false); // Hide loading modal
    }
  };

  return (
    <>
      {/* Button to trigger the buy action */}
      <button
        onClick={handleBuy}
        className="font-semibold bg-primary px-5 py-2 rounded-md hover:bg-yellow-600"
      >
        Send
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

export default SendRoyaltyPayment;
