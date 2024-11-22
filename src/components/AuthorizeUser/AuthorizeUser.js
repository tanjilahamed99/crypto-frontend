"use client";

import { useAddress } from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import Navbar from "../Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import Footer from "../Footer/Footer";
import Link from "next/link";
import { IoPersonAddSharp } from "react-icons/io5";

const AuthorizeUser = ({ children }) => {
  const { data: user, status } = useSession();
  const wallet = useAddress();

  if (status === "loading") {
    return (
      <span className="loading loading-spinner  loading-lg text-white bg-white h-[100vh] mx-auto flex justify-center"></span>
    );
  }

  return (
    <div className="bg-black">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        {!user && (
          <div className="flex flex-col gap-2 justify-center items-center my-10 h-[30vh] lg:h-[50vh]">
            <h2 className="text-white text-2xl font-bold">Not Authorized</h2>
            <Link href={"/"}>
              {" "}
              <button className="bg-primary  text-md font-semibold border-none h-10 w-28 hover:bg-[#f2a74b] rounded-lg ">
                Go to Home
              </button>
            </Link>
          </div>
        )}
        {/* {!wallet && user && (
          <div className="flex flex-col gap-2 justify-center items-center my-10 h-[35vh] lg:h-[50vh]">
            <IoPersonAddSharp className=" text-4xl text-red-500" />
            <h2 className="text-red-500 text-2xl font-bold text-center">
              You are not Register Please Register Yourself
            </h2>
            <h2 className="text-white text-base font-bold text-center">
              If have already registed please reload page after 1-5 minutes
            </h2>
          </div>
        )} */}

        {/* {user && wallet && children} */}
        {user && children}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default AuthorizeUser;
