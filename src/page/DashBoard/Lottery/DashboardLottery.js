"use client";

import { LuCircleDollarSign } from "react-icons/lu";
import { TbArrowUp } from "react-icons/tb";
import LotterySlider from "./LotterySlider";
import useGetAllLottery from "@/hooks/useGetAllLottery/useGetAllLottery";
import { useAddress, useContract } from "@thirdweb-dev/react";
import BuyButton from "./Send";

const DashboardLottery = ({ disable }) => {
  const [allLottery] = useGetAllLottery();
  const address = useAddress();
  const joinLottery = async () => {};

  return (
    <div className=" w-full lg:w-[1000px] xl:w-[1350px] mx-auto space-y-2 mt-2">
      <div className="rounded-lg gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full">
        <h2 className="text-3xl font-bold text-white">Lottery</h2>

        {/* slider  */}
        <div className="mt-3">
          <div className="hidden md:inline">
            <LotterySlider view={2} data={allLottery?.lottery} />
          </div>
          <div className=" md:hidden">
            <LotterySlider view={1} data={allLottery?.lottery} />
          </div>
        </div>

        {/* lottery jackpot */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Lottery Jackpot
          </h2>

          {allLottery?.lottery?.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row p-4 justify-between items-start md:items-center border text-card-foreground w-full mt-2 bg-opacity-20 bg-gray-400 shadow-lg rounded-lg transform transition-transform duration-100 hover:scale-105 hover:bg-gray-600 hover:border-indigo-700 gap-5 md:gap-0"
            >
              <div>
                <div className="text-white md:text-lg flex items-center font-semibold gap-2 md:gap-5">
                  <h2 className="flex items-center">
                    Entry fee:{" "}
                    <span className="text-green-500 ml-2 mr-1">$</span>
                    {item?.price}
                  </h2>

                  <BuyButton isEthPayment={true} />

                  {item?.remaining > 0 ? (
                    <button
                      onClick={joinLottery}
                      className="text-lg font-semibold bg-primary text-white rounded-xl px-3 py-1 hover:bg-green-700"
                    >
                      Join
                    </button>
                  ) : (
                    <button className="text-lg font-semibold text-white rounded-xl px-3 py-1 bg-green-700">
                      Participant full
                    </button>
                  )}
                </div>
                <div className="text-white md:text-lg flex items-center font-semibold md:gap-5 gap-2 my-2 md:mt-2 md:mb-6">
                  <h2 className="flex items-center gap-1">
                    Perticipants:
                    <span className="text-green-500 ml-2 mr-1">
                      {item?.remaining}
                    </span>
                    <p>/</p>
                    {item?.quantity}
                  </h2>
                  <button className="text-lg font-semibold bg-primary text-white rounded-xl px-3 py-1 hover:bg-green-700">
                    view
                  </button>
                </div>
                <div className="text-white md:text-lg flex items-center font-semibold">
                  <button className="text-lg font-semibold bg-primary text-white rounded-xl px-3 py-1 hover:bg-green-700">
                    Winner List
                  </button>
                </div>
              </div>
              <div>
                <div className="bg-green-700  rounded-md p-1">
                  <h2
                    className="text-white text-lg font-semibold
      "
                  >
                    Rank: 0
                  </h2>
                </div>
                <div className=" rounded-md md:mt-2 my-2 md:mb-6">
                  <h2
                    className="text-white text-lg font-semibold
      "
                  >
                    Winner amount: 0.00
                  </h2>
                </div>
                <div className="">
                  <button className="flex text-nowrap mt-5 items-center  py-1 px-2 text-white bg-black rounded-lg border-2 border-indigo-600 transform transition-transform duration-300 hover:scale-110 hover:bg-green-700 hover:border-indigo-700">
                    Claim Reward
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {disable && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-2 bg-gray-400 rounded-lg text-card-foreground shadow-sm p-4 bg-opacity-20">
          {/* earnings */}
          <div className="rounded-lg border shadow-sm w-full bg-transparent hover:bg-primary transition-colors text-primary hover:text-white border-gray-400 mx-auto grid justify-center items-center p-5">
            <p className="text-white font-semibold text-xl text-center">
              Lottery
            </p>
            <h2 className="text-primary flex items-center gap-1 hover:text-white">
              <LuCircleDollarSign className="text-3xl" />
              <span className="text-3xl font-extrabold">0.00</span>

              <span className="text-green-500 text-xl flex font-semibold items-center">
                <TbArrowUp className="text-2xl" />
                0.00
              </span>
            </h2>
          </div>
          <div className="rounded-lg border shadow-sm w-full bg-transparent hover:bg-primary transition-colors text-primary hover:text-white border-gray-400 mx-auto grid justify-center items-center p-5">
            <p className="text-white font-semibold text-xl text-center">
              Millionarie
            </p>
            <h2 className="text-primary flex items-center gap-1 hover:text-white">
              <LuCircleDollarSign className="text-3xl" />
              <span className="text-3xl font-extrabold">0.00</span>

              <span className="text-green-500 text-xl flex font-semibold items-center">
                <TbArrowUp className="text-2xl" />
                0.00
              </span>
            </h2>
          </div>
          <div className="rounded-lg border shadow-sm w-full bg-transparent hover:bg-primary transition-colors text-primary hover:text-white border-gray-400 mx-auto grid justify-center items-center p-5">
            <p className="text-white font-semibold text-xl text-center">
              Billionarie
            </p>
            <h2 className="text-primary text-2xl flex items-center gap-1 font-bold hover:text-white">
              Comming Soon
            </h2>
          </div>
          <div className="rounded-lg border shadow-sm w-full bg-transparent hover:bg-primary transition-colors text-primary hover:text-white border-gray-400 mx-auto grid justify-center items-center p-5">
            <p className="text-white font-semibold text-xl text-center">
              Trillionarie
            </p>
            <h2 className="text-primary text-2xl flex items-center gap-1 font-bold hover:text-white">
              Comming Soon
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLottery;
