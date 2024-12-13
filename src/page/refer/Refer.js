"use client";
import { useSession } from "next-auth/react";
import { FaCopy } from "react-icons/fa6";
import LotterySlider from "../DashBoard/Lottery/LotterySlider";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";

const ReferCon = () => {
  const { data: user } = useSession();
  const [websiteData] = useGetWebsiteData();

  return (
    <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto">
      <h2 className="text-white text-2xl font-bold">Refer</h2>

      <div className="space-y-3 mt-5">
        {/* refers and bot link */}
        <div className="rounded-lg text-card-foreground shadow-sm p-2 bg-opacity-20 bg-gray-400 w-full text-white">
          {/* refer link */}
          <div className="md:p-5">
            <div className="mt-3">
              <div className="hidden md:inline">
                <LotterySlider view={2} data={websiteData?.referImage} />
              </div>
              <div className=" md:hidden">
                <LotterySlider view={1} data={websiteData?.referImage} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-5">
        {/* refers and bot link */}
        <div className="rounded-lg text-card-foreground shadow-sm p-2 bg-opacity-20 bg-gray-400 w-full text-white">
          {/* refer link */}
          <div className="md:p-5">
            <h2 className="text-sm text-gray-300">Refer Link</h2>
            {user && (
              <div className="flex border border-gray-700 rounded-lg  md:ml-10 pl-5 mt-3">
                <input
                  className="flex h-10 rounded-md   text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white w-[80%] "
                  disabled
                  value={`${process.env.NEXT_PUBLIC_RRAFER_LINK}/register?unline=${user?.user?._id}`}
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring   hover:bg-gray-600 hover:text-accent-foreground p-2 text-white bg-transparent w-[20%]"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${process.env.NEXT_PUBLIC_RRAFER_LINK}/register?unline=${user?.user?._id}`
                    );
                  }}
                >
                  <FaCopy className="text-xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferCon;
