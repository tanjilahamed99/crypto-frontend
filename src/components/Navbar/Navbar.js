import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";
import Drawer from "./Drawer";

const Navbar = () => {
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
          <button className="bg-primary  text-md font-semibold border-none h-10 w-28 hover:bg-[#f2a74b] rounded-lg hidden md:inline">
            Connect
          </button>
          <button className="bg-black hover:bg-gray-900  text-primary border border-primary h-10 w-12 rounded-lg">          
            <Drawer />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
