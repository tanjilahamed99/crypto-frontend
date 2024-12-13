"use client";

import { LuCircleDollarSign } from "react-icons/lu";
import { TbArrowUp } from "react-icons/tb";
import LotterySlider from "./LotterySlider";
import useGetAllLottery from "@/hooks/useGetAllLottery/useGetAllLottery";
import BuyButton from "./Send";
import { useSession } from "next-auth/react";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";

const DashboardLottery = ({ disable }) => {
  const [allLottery, refetch] = useGetAllLottery();
  const { data: user } = useSession();
  const [websiteData] = useGetWebsiteData();
  console.log(websiteData);

  return (
    <div className=" w-full lg:w-[1000px] xl:w-[1350px] mx-auto space-y-2 mt-2">
      <div className="rounded-lg gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full">
        <h2 className="text-3xl font-bold text-white">Lottery Images</h2>

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
                    Lottery Jackpot - {idx + 0}
                  </h2>
                  <h2 className="flex items-center">
                    Entry fee:{" "}
                    <span className="text-green-500 ml-2 mr-1">$</span>
                    {item?.price}
                  </h2>
                  {item?.quantity > 0 ? (
                    <BuyButton
                      isEthPayment={true}
                      lotteryData={item}
                      id={item?._id}
                      refetchAll={refetch}
                      price={String(item?.price)}
                    />
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
                      {item?.users?.length || 0}
                    </span>
                    <p>/</p>
                    {item?.quantity}
                  </h2>
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="text-lg font-semibold bg-primary text-white rounded-xl px-3 py-1 hover:bg-green-700"
                    onClick={() =>
                      document
                        .getElementById(`my_modal_${item?._id}`)
                        .showModal()
                    }
                  >
                    view
                  </button>
                  <dialog id={`my_modal_${item?._id}`} className="modal">
                    <div className="modal-box bg-black border-gray-600 border-2 shadow-md shadow-gray-500">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                          ✕
                        </button>
                      </form>
                      <div>
                        <div className="overflow-x-auto">
                          <table className="table">
                            {/* head */}
                            <thead>
                              <tr className="text-white">
                                <th className="whitespace-nowrap">No.</th>
                                <th className="whitespace-nowrap">User Id</th>
                                <th className="whitespace-nowrap">Wallet</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item?.users?.map((item, idx) => (
                                <tr className="text-white mx-auto" key={idx}>
                                  <th className="whitespace-nowrap">
                                    {idx + 1}
                                  </th>
                                  <th className="whitespace-nowrap">
                                    {item?.userId}
                                  </th>
                                  <th className="whitespace-nowrap">
                                    {item?.wallet?.slice(0, 10)}...
                                    {item?.wallet?.slice(12, 20)}
                                  </th>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>

                <dialog
                  id={`my_modal_${item?._id}_winnersList`}
                  className="modal"
                >
                  <div className="modal-box bg-black border-gray-600 border-2 shadow-md shadow-gray-500">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                        ✕
                      </button>
                    </form>
                    <div>
                      <div className="overflow-x-auto">
                        <table className="table">
                          {/* head */}
                          <thead>
                            <tr className="text-white">
                              <th className="whitespace-nowrap">No.</th>
                              <th className="whitespace-nowrap">User Id</th>
                              <th className="whitespace-nowrap">Wallet</th>
                              <th className="whitespace-nowrap">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item?.winners?.map((item, idx) => (
                              <tr className="text-white mx-auto" key={idx}>
                                <th className="whitespace-nowrap">{idx + 1}</th>
                                <th className="whitespace-nowrap">
                                  {item?.userId}
                                </th>
                                <th className="whitespace-nowrap">
                                  {item?.wallet?.slice(0, 10)}...
                                  {item?.wallet?.slice(12, 20)}
                                </th>
                                <th className="whitespace-nowrap">
                                  <button className="bg-green-500 px-5 py-2 rounded-md">
                                    {item?.payment}
                                  </button>
                                </th>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </dialog>
                <div className="text-white md:text-lg flex items-center font-semibold">
                  {item?.winners?.length > 0 ? (
                    <button
                      onClick={() =>
                        document
                          .getElementById(`my_modal_${item?._id}_winnersList`)
                          .showModal()
                      }
                      className="text-lg font-semibold bg-primary text-white rounded-xl px-3 py-1 hover:bg-green-700"
                    >
                      Winner List
                    </button>
                  ) : (
                    <button
                      className="text-lg font-semibold bg-primary text-white rounded-xl px-3 py-1 "
                      disabled
                    >
                      Winner List
                    </button>
                  )}
                </div>
              </div>
              <div>
                <div className="bg-green-700  rounded-md p-1">
                  <h2
                    className="text-white text-lg font-semibold
      "
                  >
                    Rank: 1
                  </h2>
                </div>

                <div className="rounded-md md:mt-2 my-2 md:mb-6">
                  {(() => {
                    const winner = item?.winners?.find(
                      (win) => win.userId === user?.user?._id
                    );
                    return (
                      <h2 className="text-white text-lg font-semibold">
                        Winner amount: {winner?.amount || "0.00"}
                      </h2>
                    );
                  })()}
                </div>

                <div className="">
                  {item?.winners?.some(
                    (win) => win.userId === user?.user?._id
                  ) && (
                    <button className="flex text-nowrap mt-5 items-center py-1 px-2 text-white bg-black rounded-lg border-2 border-indigo-600 transform transition-transform duration-300 hover:scale-110 hover:bg-green-700 hover:border-indigo-700">
                      Claimed Reward
                    </button>
                  )}
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
