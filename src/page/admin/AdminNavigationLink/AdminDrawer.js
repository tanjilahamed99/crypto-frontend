"use client";
import Link from "next/link";
import React from "react";
import { FaBars, FaDatabase, FaGift, FaUserClock } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import "./admindrawer.css";
import { MdQuestionAnswer } from "react-icons/md";

const AdminDrawer = () => {
  const ulLinks = (
    <>
      {" "}
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          href={"/admin/dashboard"}
          className="flex items-center text-md font-semibold"
        >
          <IoHomeOutline className="text-2xl" /> Dashboard
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          href={"/admin/dashboard/allUser"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <FaUserClock className="text-2xl" /> All Users
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          href={"/admin/dashboard/allLottery"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <FaGift className="text-2xl" /> All Lottery
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          href={"/admin/dashboard/websiteData"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <FaDatabase className="text-2xl" /> Website Data
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          href={"/admin/dashboard/allUser"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <IoHomeOutline className="text-2xl" /> Top Earners
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          href={"/admin/dashboard/allUser"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <IoHomeOutline className="text-2xl" /> Royalty Tag
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          href={"/admin/dashboard/allUser"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <IoHomeOutline className="text-2xl" /> Testimonail Data
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700">
        <Link
          href={"/admin/dashboard/faqData"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <MdQuestionAnswer className="text-2xl" /> Faq Data
        </Link>
      </li>
    </>
  );
  return (
    <div className="drawer z-40">
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
            <ul className=" flex flex-col gap-3">{ulLinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDrawer;
