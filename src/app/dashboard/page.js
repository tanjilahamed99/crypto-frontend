import DashboardProfile from "@/page/DashBoard/DashboardProfile/DashboardProfile";
import DashboardLottery from "@/page/DashBoard/Lottery/DashboardLottery";
import React from "react";

const Hello = () => {
  return (
    <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto space-y-2">
      <DashboardProfile />
      <DashboardLottery />
    </div>
  );
};

export default Hello;
