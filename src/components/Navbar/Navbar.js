"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Drawer from "./Drawer";
import { signOut, useSession } from "next-auth/react";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: user } = useSession();
  const wallet = useAddress();
  const router = useRouter();
  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div className="navbar fixed top-0 z-40 w-full h-14 px-4 flex items-center shadow-sm  bg-gray-600  bg-opacity-50">
      <div className="flex-1">
        <Link href={"/"}>
          <Image
            src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
            width={500}
            height={500}
            alt="image not found"
            className="h-14 w-14 rounded-full"
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {wallet && user ? (
            <Link href={"/dashboard"}>
              <button className="bg-primary  text-md font-semibold border-none h-10 w-28 hover:bg-[#f2a74b] rounded-lg hidden md:inline">
                Dashboard
              </button>
            </Link>
          ) : user ? (
            <div className="space-x-2">
              <button
                onClick={() => signOut()}
                className="bg-red-800 font-bold hover:bg-red-900 text-white text-md border-none h-10 w-28 rounded-lg hidden md:inline"
              >
                Logout
              </button>
              {!wallet && (
                <button
                  onClick={handleRegister}
                  className="bg-primary  text-md font-semibold border-none h-10 w-28 hover:bg-[#f2a74b] rounded-lg hidden md:inline"
                >
                  Register
                </button>
              )}
            </div>
          ) : (
            <Link href={"/register"}>
              <button className="bg-primary  text-md font-semibold border-none h-10 w-28 hover:bg-[#f2a74b] rounded-lg hidden md:inline">
                Connect
              </button>
            </Link>
          )}
          <div>
            <Drawer />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
