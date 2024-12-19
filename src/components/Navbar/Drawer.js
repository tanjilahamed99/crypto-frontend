"use client";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { LuNewspaper } from "react-icons/lu";
import { GrGamepad } from "react-icons/gr";
import { SiLevelsdotfyi } from "react-icons/si";
import { GoGift } from "react-icons/go";
import { SlMenu } from "react-icons/sl";
import { AiTwotoneDollar } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import "./drawer.css";
import { signOut, useSession } from "next-auth/react";
import { useAddress } from "@thirdweb-dev/react";
import { AiOutlineDashboard } from "react-icons/ai";

const Drawer = () => {
  const { data: user } = useSession();

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-4");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  const ulLinks = (
    <>
      {" "}
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          onClick={closeDrawer}
          href={"/"}
          className="flex items-center text-md font-semibold"
        >
          <IoHomeOutline className="text-2xl" /> Home
        </Link>
      </li>
      {user && (
        <>
          <li className="border border-gray-600  rounded-md hover:bg-gray-700">
            <Link
              onClick={closeDrawer}
              href={"/dashboard"}
              className="flex items-center text-md font-semibold"
            >
              <AiOutlineDashboard className="text-2xl" /> Dashboard
            </Link>
          </li>
          <li className="border border-gray-600  rounded-md hover:bg-gray-700">
            <Link
              onClick={closeDrawer}
              href={"/dashboard/profile"}
              className="flex items-center text-md font-semibold"
            >
              <CgProfile className="text-2xl" /> Profile
            </Link>
          </li>
          <li className="border border-gray-600  rounded-md hover:bg-gray-700">
            <Link
              onClick={closeDrawer}
              href={"/dashboard/level"}
              className="flex items-center text-md font-semibold"
            >
              <SiLevelsdotfyi className="text-2xl" /> Level Team
            </Link>
          </li>
          <li className="border border-gray-600  rounded-md hover:bg-gray-700">
            <Link
              onClick={closeDrawer}
              href={"/dashboard/lottery"}
              className="flex items-center text-md font-semibold"
            >
              <GoGift className="text-2xl" /> Lottery
            </Link>
          </li>
          <li className="border border-gray-600  rounded-md hover:bg-gray-700">
            <Link
              onClick={closeDrawer}
              href={"/dashboard/proProgram"}
              className="flex items-center text-md font-semibold"
            >
              <SlMenu className="text-2xl" /> Pro Program
            </Link>
          </li>
          <li className="border border-gray-600  rounded-md hover:bg-gray-700">
            <Link
              onClick={closeDrawer}
              href={"/dashboard/royaltySalary"}
              className="flex items-center text-md font-semibold"
            >
              <AiTwotoneDollar className="text-2xl" /> Royalty Salary
            </Link>
          </li>
          <li className="border border-gray-600  rounded-md hover:bg-gray-700">
            <Link
              onClick={closeDrawer}
              href={"/dashboard/gamingNft"}
              className="flex items-center text-md font-semibold"
            >
              <GrGamepad className="text-2xl" /> Gaming NFT
            </Link>
          </li>
        </>
      )}
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          onClick={closeDrawer}
          href={"/updates"}
          className="flex items-center text-md font-semibold"
        >
          <LuNewspaper className="text-2xl" /> Updates
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          onClick={closeDrawer}
          href={"/news"}
          className="flex items-center text-md font-semibold"
        >
          <LuNewspaper className="text-2xl" /> News & Event
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          onClick={closeDrawer}
          href={"/support"}
          className="flex items-center text-md font-semibold"
        >
          <FaPhoneAlt className="text-2xl" /> Support
        </Link>
      </li>
    </>
  );
  const wallet = useAddress();

  return (
    <div className="drawer">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer">
          <FaBars className="mx-auto text-base  md:text-xl bg-black hover:bg-gray-900  text-primary border border-primary h-6 w-8 md:h-10 md:w-12 rounded-lg" />
        </label>
      </div>
      <div className="drawer-side">
        {/* Apply custom CSS class for conditional blur */}
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay custom-backdrop-blur"
        ></label>
        <div className="menu bg-black min-h-full w-80 p-4 relative mt-10 rounded-lg border border-gray-500">
          {/* Close Button Positioned Higher */}
          <label
            htmlFor="my-drawer-4"
            className="absolute -top-7 text-white rounded-2xl left-2 cursor-pointer hover:font-extrabold"
            aria-label="close drawer"
          >
            <RxCross2 className="w-5 h-5 text-center hover:border hover:shadow-md rounded-full" />
          </label>
          {/* Sidebar content here */}
          <div className="text-white">
            <ul className=" flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => signOut()}
                  className="bg-red-800 font-bold hover:bg-red-900 text-white text-md border-none h-10 w-28 rounded-lg md:hidden"
                >
                  Logout
                </button>
                {!wallet && (
                  <>
                    <Link href={"/register"}>
                      <button className="bg-primary text-white  text-md font-semibold border-none h-10 w-28 hover:bg-[#f2a74b] rounded-lg md:hidden">
                        Register
                      </button>
                    </Link>
                  </>
                )}
              </div>

              {ulLinks}
            </ul>
            <div className="mt-10 text-start">
              <h3 className="text-xl font-bold">Change Language</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
