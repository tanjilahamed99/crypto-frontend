"use client";

import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuCircleDollarSign } from "react-icons/lu";

const MyRoyaltySalary = ({ searchParams }) => {
  const { type } = searchParams;
  const [showData, setShowData] = useState([]);
  const { data: user } = useSession();
  const [myCartData] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });

  // console.log(myCartData?.result?.proProgram);
  console.log(showData);

  useEffect(() => {
    if (myCartData?.result?.proProgram?.length > 0 && type) {
      const filter = myCartData.result.proProgram.filter(
        (item) => item.programName === type
      );
      setShowData([...filter]);
    }
  }, [type, myCartData]);

  return (
    <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto">
      <h3 className="font-semibold tracking-tight text-2xl mb-4 text-white flex items-start">
        My {type} Royalty Salary
      </h3>

      <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {" "}
        {showData?.map((item, idx) => (
          <div key={idx}>
            <div className="rounded-lg space-y-2 text-card-foreground shadow-sm p-2 w-full max-w-sm transform  transition-transform duration-100 hover:scale-105 bg-gray-400 bg-opacity-20 hover:bg-gray-600 py-10">
              <h2 className="font-semibold tracking-tight text-center mb-3 text-lg text-white">
                Millionaire
              </h2>
              <Image
                src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                height={500}
                width={500}
                alt="image not found"
                className="w-20 h-20 mx-auto"
              />

              <div className="flex gap-2 items-center">
                <h2 className="text-white text-sm font-semibold">Price :</h2>
                <h2 className="text-white text-sm font-semibold flex items-center gap-1">
                  <LuCircleDollarSign className="text-primary" />
                  {item?.price}
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <h2 className="text-white font-semibold">
                  Total Earning :
                </h2>
                <h2 className="text-white text-sm font-semibold flex items-center gap-1">
                  <LuCircleDollarSign className="text-primary" />
                  {item?.earing || 0}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRoyaltySalary;
