import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserClock } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdQuestionAnswer } from "react-icons/md";
const AdminNavigateLink = () => {
  const ulLinks = (
    <>
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
          href={"/admin/dashboard/allUser"}
          className="flex items-center text-md font-semibold gap-3"
        >
          <IoHomeOutline className="text-2xl" /> Testimonail Data
        </Link>
      </li>
      <li className="border border-gray-600  rounded-md hover:bg-gray-700 p-2">
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
    <div className="bg-gray-800 text-white border-gray-900 border h-[]100vh]">
      <Link href={"/admin/dashboard"}>
        <h2 className="text-3xl font-bold p-5">Dashboard</h2>
      </Link>

      <ul className=" flex flex-col gap-4 p-5">{ulLinks}</ul>
    </div>
  );
};

export default AdminNavigateLink;
