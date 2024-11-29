"use client";

import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import useGetAllProProgramByType from "@/hooks/useProPrograms/useAllProgramByType";
import Image from "next/image";
import { LuCircleDollarSign } from "react-icons/lu";
import ActiveProgram from "./ActiveProgram";
import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";
import { useSession } from "next-auth/react";

const PowerMatrix = () => {
  const [websiteData] = useGetWebsiteData();
  const { data: user } = useSession()

  const [programsByTpe, refetch] = useGetAllProProgramByType({
    type: "power-matrix",
  });

  const [myCartData] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });


  return (
    <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto space-y-4 px-2 lg:px-0">
      <h2 className="text-2xl font-semibold leading-none tracking-tight text-white">
        Pro Power Matrix
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center gap-4">
        {programsByTpe?.programs?.map((item, idx) => (
          <div
            className="border  shadow-sm rounded-3xl transition-colors h-full w-full bg-gray-700 text-white"
            key={idx}
          >
            <div className="flex flex-col space-y-3 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                <div className="flex justify-between">
                  <div>Slot {item?.order}</div>
                  <div className="flex gap-1 text-primary">
                    <LuCircleDollarSign />
                    {item?.price}
                  </div>
                </div>
                <div className="flex gap-1 text-green-600 text-base">
                  <p>Total User : 0</p>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-center items-center flex-col gap-2 space-y-4">
              <Image
                src={websiteData?.websiteImage || ""}
                alt="'image link not working"
                height={500}
                width={500}
                className="w-20 h-20"
              />



              {myCartData?.result?.proProgram.find(pro => pro?._id === item?._id) ? (
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-text bg-green-600 text-primary-foreground  h-9 rounded-md px-3"
                >
                  Activated
                </button>
              ) : (
                <ActiveProgram isEthPayment={true} programData={item} proRefetch={refetch} id={item?._id} />
              )}


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PowerMatrix;
