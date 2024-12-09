"use client";

import Image from "next/image";
import Link from "next/link";
import RegistrationFunction from "./RegistationFunction";
import { useAddress } from "@thirdweb-dev/react";
import axios from "axios";
import { BASE_URL } from "@/constant/constant";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from "next-auth/react";

const RegisterForm = ({ refer }) => {
  const address = useAddress();
  const router = useRouter();
  const url = `${BASE_URL}/register`;
  const { data: user } = useSession();
  const date = Date();

  const register = async () => {
    const { data } = await axios?.post(url, {
      wallet: address,
      referBy: refer ? refer : "6729caf3a6953243197ef6bb",
      joined: date,
    });

    // console.log(data);

    if (data?.status) {
      try {
        const response = await signIn("credentials", {
          wallet: address,
          callbackUrl: "/dashboard",
          redirect: false,
        });

        if (response?.status) {
          if (user) {
            const newUser = user?.user?._id;
            const referOwner = refer || "6729caf3a6953243197ef6bb";
            const { data } = await axios.post(
              `${BASE_URL}/saveRefer/${referOwner}/${newUser}`
            );
            router.push("/dashboard");
          }
        }
      } catch (error) {
        console.error("Error logging in:", error);
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
    </div>
  );
};

export default RegisterForm;
