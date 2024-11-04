"use client";
import { useAddress } from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import React from "react";

const LotteryHistory = () => {
  const { data: user } = useSession();
  const wallet = useAddress();
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
            <div className="text-center p-5">
              <p className="text-lg font-semibold">
                You are not a participant in any lottery.
              </p>
              <p>Join a lottery to see your transactions here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryHistory;
