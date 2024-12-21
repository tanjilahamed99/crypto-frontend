"use client";

import Image from "next/image";
import Link from "next/link";
import RegistrationFunction from "./RegistationFunction";
import { useAddress, useSigner } from "@thirdweb-dev/react";
import axios from "axios";
import { BASE_URL } from "@/constant/constant";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from "next-auth/react";
import { ethers } from "ethers";
import { useState } from "react";

const RegisterForm = ({ refer }) => {
  const address = useAddress();
  const router = useRouter();
  const signer = useSigner(); // Get signer to send transactions
  const [loading, setLoading] = useState(false);

  const { data: user } = useSession();
  const date = Date();
  const price = "0.0003";
  const adminAddress = "0xd4835Bc8a235Cc6Ecd6274A06B40495331310F01";

  const register = async () => {
    setLoading(true);
    const url = `${BASE_URL}/userCheck/${address}`;
    const { data } = await axios?.get(url);
    // console.log(data);

    if (data?.created) {
      try {
        const response = await signIn("credentials", {
          wallet: address,
          callbackUrl: "/dashboard",
          redirect: false,
        });
        if (response?.status) {
          router.push("/dashboard");
        }
        console.log(response);
        setLoading(false);
      } catch (error) {
        console.error("Error logging in:", error);
      }
    } else {
      if (!address || !signer) {
        alert("Connect your wallet first!");
        return;
      }
      try {
        // ETH Payment
        const tx = await signer.sendTransaction({
          to: adminAddress,
          value: ethers.utils.parseEther(price),
        });
        await tx.wait();
        console.log(tx);

        if (tx) {
          const registerUrl = `${BASE_URL}/register`;
          const { data } = await axios?.post(registerUrl, {
            wallet: address,
            referBy: refer ? refer : "6729caf3a6953243197ef6bb",
            joined: date,
          });
          if (data?.create) {
            try {
              const response = await signIn("credentials", {
                wallet: address,
                callbackUrl: "/dashboard",
                redirect: false,
              });
              if (response?.status) {
                router.push("/dashboard");
              }
              setLoading(false);
            } catch (error) {
              console.error("Error logging in:", error);
            }
          }
        }
      } catch (error) {
        console.error("Transaction failed:", error);
        alert("Transaction failed: " + error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="border border-primary text-white p-5 rounded-lg">
      <h2 className="text-2xl font-bold leading-none tracking-tight text-center">
        Registering for Istimate-Pro
      </h2>
      <Image
        src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
        width={500}
        height={500}
        alt="image not found"
        className="h-32 w-32 rounded-full mx-auto mt-5"
      />
      <h2 className="text-center text-lg font-semibold">Istimate-Pro</h2>
      {/* form */}
      <div>
        <h2>Reffer by</h2>
        <input
          className="bg-black border border-gray-600 w-full  p-2 rounded-md mt-2"
          placeholder="refer code"
          defaultValue={refer ? refer : "6729caf3a6953243197ef6bb"}
          disabled
        />

        <h2 className="my-4">This is Istimate-Pro Main Id</h2>

        <div className="flex items-start gap-2">
          <input type="checkbox" className="w-5 h-5" />
          <div className="space-y-2">
            <p>Conneted to Wallet</p>
            <RegistrationFunction />
          </div>
        </div>
        <button
          onClick={register}
          className="btn border-none bg-primary w-full my-5 text-white"
          disabled={address ? false : true}
        >
          Register
        </button>

        <Link href={"/"} className="text-primary font-bold">
          Go To Home
        </Link>
      </div>

      {/* Loading Modal */}
      {loading && (
        <dialog id="loading_modal" className="modal " open>
          <div className="modal-box text-black bg-white">
            <span className="loading loading-spinner loading-lg flex justify-center mx-auto"></span>
            <h3 className="font-bold text-lg">Processing...</h3>
            <p className="py-4">
              Your transaction is being processed. Please wait...
            </p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default RegisterForm;
