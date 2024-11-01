"use client";

import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import RegistrationFunction from "./RegistationFunction";

const RegisterForm = () => {

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
          defaultValue={"297945"}
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
        <button className="btn border-none bg-primary w-full my-5 " disabled>
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
