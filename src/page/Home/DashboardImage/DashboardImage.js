"use client";

import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import Image from "next/image";

const DashboardImage = () => {
  const [websiteData] = useGetWebsiteData();
  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto">
      <h2 className="text-primary  text-2xl lg:text-3xl font-extrabold text-center mb-5">
        Premium Dashboard
      </h2>
      <Image
        src={websiteData?.dashboardImage || ""}
        className="w-80 h-60 mx-auto"
        alt="image not found"
        height={500}
        width={500}
      />
    </div>
  );
};

export default DashboardImage;
