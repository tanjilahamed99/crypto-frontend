"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa6";
import { LuCircleDollarSign } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidNetworkChart } from "react-icons/bi";
import { TbArrowUp } from "react-icons/tb";
import { useRouter } from "next/navigation";
import useGetMyRefersData from "@/hooks/useGetMyRefers/UseGetMyRefers";

const DashboardProfile = () => {
  const { data: user, status } = useSession();
  const router = useRouter();
  const [myRefers] = useGetMyRefersData({ id: user?.user?._id });
  console.log(myRefers?.result?.length);

  if (!user) {
    router.push("/");
  }

  return (
    <>
      <div className="space-y-2">
        <div className="flex flex-col lg:flex-row items.center gap-3 p-2 lg:p-0">
          {/* profile items */}
          <div className="rounded-lg text-card-foreground shadow-sm p-2 bg-opacity-20 bg-gray-400 w-full">
            <h2 className="text-sm text-gray-300">Profile</h2>

            <div className="flex items-center text-white gap-3 md:gap-5 md:p-5">
              <div className="w-[20%]">
                <Image
                  src={user?.user?.picture || ""}
                  width={500}
                  height={500}
                  alt="image not found"
                  className="md:h-20 md:w-20 w-14 h-14 rounded-full mx-auto"
                />
              </div>

              <div className="flex flex-col gap-2 md:gap-3 w-[80%]">
                <h2 className="font-bold flex gap-2 text-sm md:text-base">
                  ID : <span className="font-normal">{user?.user?._id}</span>
                </h2>
                <h2 className="font-bold flex gap-2 text-sm md:text-base">
                  Wallet :{" "}
                  <span className="font-normal">
                    {user?.user?.wallet?.slice(0, 6)}...
                    {user?.user?.wallet?.slice(15, 20)}
                  </span>
                </h2>
                <h2 className="font-bold flex gap-2 text-sm md:text-base">
                  Username :
                  <span className="font-normal">{user?.user?.username}</span>
                </h2>
                <h2 className="font-bold flex gap-2 text-sm md:text-base">
                  Joined on :
                  <span className="font-normal">
                    {user?.user?.joined?.slice(0, 15)}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items.center gap-3 p-2 lg:p-0">
          <div className="rounded-lg text-card-foreground gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full mx-auto grid justify-center items-center">
            <h2 className="text-primary flex items-center gap-1">
              <LuCircleDollarSign className="text-xl" />
              <span className="text-3xl font-extrabold">0</span>

              <span className="text-green-500 text-base flex font-semibold items-center">
                <TbArrowUp className="text-2xl" />0
              </span>
            </h2>
            <p className="text-white font-semibold">Total Profit</p>
          </div>
          <div className="rounded-lg text-card-foreground gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full mx-auto grid justify-center items-center">
            <h2 className="text-primary flex items-center gap-1">
              <BsPeopleFill className="text-xl" />
              <span className="text-3xl font-extrabold">
                {" "}
                {myRefers?.result?.length || 0}
              </span>

              <span className="text-green-500 text-base flex font-semibold items-center">
                <TbArrowUp className="text-2xl" />0
              </span>
            </h2>
            <p className="text-white font-semibold">Partners</p>
          </div>
          <div className="rounded-lg text-card-foreground gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full mx-auto grid justify-center items-center">
            <h2 className="text-primary flex items-center gap-1">
              <BiSolidNetworkChart className="text-xl" />
              <span className="text-3xl font-extrabold">
                {myRefers?.result?.length || 0}
              </span>

              <span className="text-green-500 text-base flex font-semibold items-center">
                <TbArrowUp className="text-2xl" />0
              </span>
            </h2>
            <p className="text-white font-semibold">Total Teams</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProfile;
