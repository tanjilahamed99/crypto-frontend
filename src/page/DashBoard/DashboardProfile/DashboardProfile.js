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
import useGetAllUsers from "@/hooks/useGetAllUsers/useGetAllUsers";
import { useEffect, useState } from "react";
import useGetMyProfit from "@/hooks/useGetMyRefers/UseGetMyTotalProfit";

const DashboardProfile = () => {
  const { data: user, status } = useSession();
  const [myRefers] = useGetMyRefersData({ id: user?.user?._id });
  const [allUsers] = useGetAllUsers();
  const [downLine, setDownLine] = useState();
  const [myProfit] = useGetMyProfit({ id: user?.user?._id });

  useEffect(() => {
    if (allUsers?.length > 0) {
      // Step 1: Group users by who referred them
      const referralMap = {};
      allUsers.forEach((user) => {
        const referrer = user.referBy;
        if (!referralMap[referrer]) {
          referralMap[referrer] = [];
        }
        referralMap[referrer].push(user._id);
      });

      // Step 2: Recursive function to count and list referrals
      function getReferrals(userId) {
        const directReferrals = referralMap[userId] || [];
        let totalReferrals = [...directReferrals]; // Collect all direct referrals
        for (const referralId of directReferrals) {
          totalReferrals = totalReferrals.concat(getReferrals(referralId));
        }
        return totalReferrals;
      }

      // Step 3: Calculate referrals for the admin's referrals
      function getAdminReferralsAndSubReferrals(adminId) {
        const adminReferrals = referralMap[adminId] || [];
        const result = {};

        adminReferrals.forEach((referralId) => {
          const referralChain = getReferrals(referralId); // Get referrals for this user
          result[referralId] = {
            directReferrals: referralMap[referralId]?.length || 0,
            totalReferrals: referralChain.length,
            referralChain: referralChain,
          };
        });

        return result;
      }
      // Step 4: Calculate the total referrals sum
      function calculateTotalReferralsSum(adminId) {
        const adminReferralsData = getAdminReferralsAndSubReferrals(adminId);

        let totalSum = 0;
        for (const key in adminReferralsData) {
          totalSum += adminReferralsData[key].totalReferrals;
        }
        return totalSum;
      }

      // Example Usage
      const adminId = "6729caf3a6953243197ef6bb";
      const totalReferralsSum = calculateTotalReferralsSum(adminId);

      setDownLine(totalReferralsSum);
    }
  }, [allUsers]);

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
              <span className="text-3xl font-extrabold">
                {myProfit?.totalAmount}
              </span>
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
              <span className="text-3xl font-extrabold">{downLine || 0}</span>

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
