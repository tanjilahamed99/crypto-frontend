"use client";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import Link from "next/link";
import React from "react";

const Halp = () => {
  const [websiteData] = useGetWebsiteData();
  return (
    <div className="border border-primary text-white p-5 rounded-lg space-y-5">
      <h2 className="text-2xl font-semibold leading-none tracking-tight">
        How to register in Istimate-Pro?
      </h2>
      <p>
        Get professional support from Istimate-Pro specialists in the online
        chat Contact support
      </p>

      <Link href={websiteData?.support || "/"}>
        <button className="w-full h-10 bg-gray-800 font-bold rounded-lg">
          Contact Support
        </button>
      </Link>
    </div>
  );
};

export default Halp;
