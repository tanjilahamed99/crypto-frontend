"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserClock, FaUserPlus } from "react-icons/fa6";
import { FaGift, FaUserCog } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdQuestionAnswer } from "react-icons/md";
import AdminDrawer from "./AdminDrawer";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineMedicalInformation } from "react-icons/md";

const AdminNavigateLink = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const ulLinks = (
    <>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
        <Link
          href={"/admin/dashboard"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <FaUserClock className="text-2xl" /> Dashboard
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
        <Link
          href={"/admin/dashboard/allUser"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <FaUserClock className="text-2xl" /> All Users
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
        <Link
          href={"/admin/dashboard/allLottery"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <FaGift className="text-2xl" /> All Lottery
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
        <Link
          href={"/admin/dashboard/websiteData"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <FaDatabase className="text-2xl" /> Website Data
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
        <Link
          href={"/admin/dashboard/allUser"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <IoHomeOutline className="text-2xl" /> Top Earners
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
        <Link
          href={"/admin/dashboard/allUser"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <IoHomeOutline className="text-2xl" /> Royalty Tag
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
        <Link
          href={"/admin/dashboard/testimonialData"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <MdOutlineMedicalInformation className="text-2xl" /> Testimonail
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
        <Link
          href={"/admin/dashboard/faqData"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <MdQuestionAnswer className="text-2xl" /> Faq
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
        <Link
          href={"/admin/dashboard/gamingNft"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <GrGamepad className="text-2xl" /> Gamign NFT
        </Link>
      </li>

      <li className="border border-gray-600 rounded-md hover:bg-gray-700 p-2">
        <button
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          className="flex items-center text-md font-semibold gap-3 w-full text-left"
        >
          <FaUserClock className="text-2xl" /> Website Data
        </button>

        {/* Submenu items with smooth transition */}
        <ul
          className={`ml-6 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
            isSubMenuOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ transitionProperty: "max-height, opacity" }}
        >
          <li className="hover:bg-gray-800 p-2 rounded-md">
            <Link
              href={"/admin/dashboard/addUser"}
              className="flex items-center gap-2"
            >
              <FaUserPlus className="text-lg" /> Add User
            </Link>
          </li>
          <li className="hover:bg-gray-800 p-2 rounded-md">
            <Link
              href={"/admin/dashboard/manageUsers"}
              className="flex items-center gap-2"
            >
              <FaUserCog className="text-lg" /> Manage Users
            </Link>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div className="bg-gray-800 text-white border-gray-900 border h-[]100vh]">
      <div className="flex md:hidden justify-between items-center p-4">
        <div className="md:hidden">
          <AdminDrawer />
        </div>
        <Link href={"/admin/dashboard"}>
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </Link>
      </div>
      <Link className="hidden md:inline" href={"/admin/dashboard"}>
        <h2 className="text-3xl font-bold p-4">Dashboard</h2>
      </Link>

      <ul className="hidden md:flex flex-col gap-4 p-5">{ulLinks}</ul>
    </div>
  );
};

export default AdminNavigateLink;
