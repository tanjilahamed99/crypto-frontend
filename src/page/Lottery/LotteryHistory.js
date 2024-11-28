"use client";
import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";
import { useAddress } from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const LotteryHistory = () => {
  const { data: user } = useSession();
  const [myCartData] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });

  return (
    <div>
      <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto text-white">
        <div className="p-2 lg:p-0">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            Lottery NFT
          </h2>
          <div className="flex md:justify-start lg:justify-start  md:items-center">
            <div className="rounded-lg border text-card-foreground shadow-sm flex md:max-w-sm mt-2 bg-gray-400 bg-opacity-20 max-w-xs justify-center p-2">
              <p>You havent joined the lottery yet.</p>
            </div>
          </div>
        </div>

        <div className="mt-5 p-2 lg:p-0">
          <h2 className="md:text-4xl font-bold text-xl">Lottery Transaction</h2>
          <div className="rounded-lg border  shadow-sm mt-4">
            {myCartData?.result?.lottery?.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-white">
                      <th className="whitespace-nowrap">Image</th>
                      <th className="whitespace-nowrap">Lottery Name</th>
                      <th className="whitespace-nowrap">Lottery Price</th>
                      <th className="whitespace-nowrap">transaction Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myCartData?.result?.lottery?.map((item, idx) => (
                      <tr className="text-white mx-auto" key={idx}>
                        <th className="whitespace-nowrap">
                          <Image
                            src={item?.image}
                            alt="image not found"
                            height={500}
                            width={500}
                            className="w-10 h-10 rounded-full"
                          />
                        </th>
                        <th className="whitespace-nowrap">{item?.title}</th>
                        <th className="whitespace-nowrap">{item?.price}</th>
                        <th className="whitespace-nowrap">
                          {item?.history?.hash?.slice(0, 10)}...
                          {item?.history?.hash?.slice(12, 20)}
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center p-5">
                <p className="text-lg font-semibold">
                  You are not a participant in any lottery.
                </p>
                <p>Join a lottery to see your transactions here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryHistory;
