"use client";
import { FaUserClock } from "react-icons/fa6";
import useGetAllUsers from "@/hooks/useGetAllUsers/useGetAllUsers";
import { useSession } from "next-auth/react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";
const Dashboard = () => {
  const { data: user } = useSession() || {};
  const [allUsers, refetch] = useGetAllUsers({
    adminId: user?.user?._id,
    adminEmail: user?.user?.email,
    wallet: user?.user?.wallet,
  });
  return (
    <div>
      <h2 className="text-white text-2xl font-bold my-5">Dashboard</h2>

      <div className="space-y-4">
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:pr-3">
          <div className="flex bg-blue-500 rounded-md h-[100px] items-center justify-between px-5">
            <FaUsers className="text-4xl" />
            <div className="text-right">
              <h2 className="font-bold">Total User</h2>
              <h2 className="font-bold text-2xl">{allUsers?.length}</h2>
            </div>
          </div>
          <div className="flex bg-green-500 rounded-md h-[100px] items-center justify-between px-5">
            <MdOutlineVerifiedUser className="text-4xl" />
            <div className="text-right">
              <h2 className="font-bold">Plan Active Memebsers</h2>
              <h2 className="font-bold text-2xl">{allUsers?.length}</h2>
            </div>
          </div>
          <div className="flex bg-sky-500 rounded-md h-[100px] items-center justify-between px-5">
            <FaUserClock className="text-4xl" />
            <div className="text-right">
              <h2 className="font-bold">Today Joined Users</h2>
              <h2 className="font-bold text-2xl">{allUsers?.length}</h2>
            </div>
          </div>
        </div>
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:pr-3">
          <div className="flex bg-white text-black rounded-md h-[100px] items-center  gap-5 px-5">
            <div className="p-2 bg-green-600 text-white rounded-md">
              <FaCircleDollarToSlot className="text-4xl" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl flex items-center gap-1">
                <BsCurrencyDollar />
                0.00
              </h2>
              <h2 className="font-bold">Today deposit</h2>
            </div>
          </div>
          <div className="flex bg-white text-black rounded-md h-[100px] items-center  gap-5 px-5">
            <div className="p-2 border border-green-600 text-black rounded-md">
              <FaWallet className="text-4xl" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl flex items-center gap-1">
                <BsCurrencyDollar />
                0.00
              </h2>
              <h2 className="font-bold">Today Withdrawal</h2>
            </div>
          </div>
          <div className="flex bg-white text-black rounded-md h-[100px] items-center  gap-5 px-5">
            <div className="p-2 bg-green-600 text-white rounded-md">
              <FaCircleDollarToSlot className="text-4xl" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl flex items-center gap-1">
                <BsCurrencyDollar />
                0.00
              </h2>
              <h2 className="font-bold">Total deposit</h2>
            </div>
          </div>
          <div className="flex bg-white text-black rounded-md h-[100px] items-center  gap-5 px-5">
            <div className="p-2 border border-green-600 text-black rounded-md">
              <FaWallet className="text-4xl" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl flex items-center gap-1">
                <BsCurrencyDollar />
                0.00
              </h2>
              <h2 className="font-bold">Total Withdrawal</h2>
            </div>
          </div>
          <div className="flex bg-white text-black rounded-md h-[100px] items-center  gap-5 px-5">
            <div className="p-2 bg-orange-400 text-white rounded-md">
              <AiOutlineLoading3Quarters className="text-4xl" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl flex items-center gap-1">
                <BsCurrencyDollar />
                0.00
              </h2>
              <h2 className="font-bold">Pending deposit</h2>
            </div>
          </div>
          <div className="flex bg-white text-black rounded-md h-[100px] items-center  gap-5 px-5">
            <div className="p-2 bg-orange-400 text-white rounded-md">
              <BiBlock className="text-4xl" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl flex items-center gap-1">
                <BsCurrencyDollar />
                0.00
              </h2>
              <h2 className="font-bold">Reject deposit</h2>
            </div>
          </div>
          <div className="flex bg-white text-black rounded-md h-[100px] items-center  gap-5 px-5">
            <div className="p-2 bg-orange-400 text-white rounded-md">
              <BsCurrencyDollar className="text-4xl" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl flex items-center gap-1">
                <BsCurrencyDollar />
                0.00
              </h2>
              <h2 className="font-bold">Deposit Charge</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
