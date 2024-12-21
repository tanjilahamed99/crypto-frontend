"use client";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import React from "react";

const Command = () => {
  const [websiteData] = useGetWebsiteData();
  return (
    <div className="border border-primary text-white p-5 rounded-lg">
      <h2 className="text-2xl font-semibold leading-none tracking-tight">
        How to register in Istimate-Pro?
      </h2>

      <div className="mt-8 space-y-3">
        <div className="flex md:items-center gap-2 font-semibold">
          <p className=" w-10 h-10 flex items-center justify-center text-xl text-primary font-semibold  rounded-full bg-gray-600">
            1
          </p>
          <p className="w-fit">{websiteData?.register?.ruleOne}</p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <p className="w-10 h-10 flex items-center justify-center text-xl text-primary font-semibold  rounded-full bg-gray-600">
            2
          </p>
          <p className="w-fit">{websiteData?.register?.ruleTwo}</p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <p className="w-10 h-10 flex items-center justify-center text-xl text-primary font-semibold  rounded-full bg-gray-600">
            3
          </p>
          <p className="w-fit">{websiteData?.register?.ruleThree}</p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <p className="w-10 h-10 flex items-center justify-center text-xl text-primary font-semibold  rounded-full bg-gray-600">
            4
          </p>
          <p className="w-fit">{websiteData?.register?.ruleFour}</p>
        </div>
      </div>
    </div>
  );
};

export default Command;
