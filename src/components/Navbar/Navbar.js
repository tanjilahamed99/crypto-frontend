import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-400">
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
              <FaBars className="mx-auto text-xl" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
