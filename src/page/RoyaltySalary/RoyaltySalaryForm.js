import React from "react";
import Image from "next/image";
import { BiSolidNetworkChart } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import { TbArrowUp } from "react-icons/tb";

const RoyaltySalaryForm = () => {
  return (
    <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto">
      <div className=" bg-background p-2">
        <div className="bg-opacity-20 bg-gray-400">
          <div className="rounded-lg  text-card-foreground shadow-sm p-2 bg-transparent w-full">
            <h2 className="font-semibold tracking-tight text-2xl mb-4 text-white flex items-start gap-2">
              Royalty Monthly Salary
              <span className="text-green-500 text-base">
                Congratulations..
              </span>
            </h2>
            <div className="p-6 pt-0 flex flex-col md:flex-row gap-4 items-center md:items-stretch">
              <div className="rounded-lg text-card-foreground shadow-sm p-2 w-full max-w-sm transform  transition-transform duration-100 hover:scale-105 bg-gray-400 bg-opacity-20 hover:bg-gray-600 py-10">
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
              </div>
              <div className="rounded-lg text-card-foreground shadow-sm p-2 w-full max-w-sm transform  transition-transform duration-100 hover:scale-105 bg-gray-400 bg-opacity-20 hover:bg-gray-600 py-10">
                <h2 className="font-semibold tracking-tight text-center mb-3 text-lg text-white">
                  Billionaire
                </h2>
                <Image
                  src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                  height={500}
                  width={500}
                  alt="image not found"
                  className="w-20 h-20 mx-auto"
                />
                <h2 className="font-light tracking-tight text-center mt-2 text-white">
                  Comming Soon
                </h2>
              </div>
              <div className="rounded-lg text-card-foreground shadow-sm p-2 w-full max-w-sm transform  transition-transform duration-100 hover:scale-105 bg-gray-400 bg-opacity-20 hover:bg-gray-600 py-10">
                <h2 className="font-semibold tracking-tight text-center mb-3 text-lg text-white">
                  Trillionaire
                </h2>
                <Image
                  src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                  height={500}
                  width={500}
                  alt="image not found"
                  className="w-20 h-20 mx-auto"
                />
                <h2 className="font-light tracking-tight text-center mt-2 text-white">
                  Comming Soon
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-background p-2">
        <div className="bg-opacity-20 bg-gray-400">
          <div className="rounded-lg  text-card-foreground shadow-sm p-2 bg-transparent w-full">
            <h2 className="font-semibold tracking-tight text-2xl mb-4 text-white">
              Royalty Earning
            </h2>
            <div className="p-6 pt-0 flex flex-col md:flex-row gap-4 items-center md:items-stretch">
              <div className="rounded-lg text-card-foreground gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full mx-auto grid justify-center items-center">
                <h2 className="text-primary flex items-center font-bold gap-1">
                  <LuCircleDollarSign className="text-xl" />
                  <span className="text-3xl font-extrabold">0.00</span>
                </h2>
                <p className="text-white font-semibold text-center">
                  Millionaire
                </p>
              </div>
              <div className="rounded-lg text-card-foreground gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full mx-auto grid justify-center items-center">
                <h2 className="text-primary flex items-center font-bold gap-1 text-2xl">
                  Comming Soon
                </h2>
                <p className="text-white font-semibold text-center">
                  Billionaire
                </p>
              </div>
              <div className="rounded-lg text-card-foreground gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full mx-auto grid justify-center items-center">
                <h2 className="text-primary flex items-center font-bold gap-1 text-2xl">
                  Comming Soon
                </h2>
                <p className="text-white font-semibold text-center">
                  Trillionaire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-background p-2">
        <div className="bg-opacity-20 bg-gray-400">
          <div className="rounded-lg  text-card-foreground shadow-sm p-2 bg-transparent w-full">
            <h2 className="font-semibold tracking-tight text-2xl mb-4 text-white">
              Royalty Distribution Details
            </h2>
            <div className="p-6 pt-0 flex flex-col md:flex-row gap-4 items-center md:items-stretch">
              <div className="rounded-lg border text-card-foreground shadow-sm p-2 w-full max-w-sm bg-gray-400 bg-opacity-20 hover:bg-gray-600">
                <div className="p-6 pt-0 h-full text-white">
                  <h2 className="font-semibold tracking-tight text-center mb-[6%] md:mb-[4%] border-none text-lg">
                    Millionaire
                  </h2>
                  <div className="w-full text-left">
                    <div className="relative w-full overflow-auto">
                      <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                          <tr className="border-b border-gray-500 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"></tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                          <tr className="border-b border-gray-500 transition-colors hover:bg-gray-800 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-bold">
                              MARS User
                            </td>
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                              <button className="text-orange-400 items-center cursor-pointer  px-5 font-semibold rounded shadow-md bg-green-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 text-center">
                                9263
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-500 transition-colors hover:bg-gray-800 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-bold">
                              MOON User
                            </td>
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                              <button className="text-orange-400 items-center cursor-pointer px-5 font-semibold rounded shadow-md bg-green-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 text-center">
                                542
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-500 transition-colors hover:bg-gray-800 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-bold">
                              SATURN User
                            </td>
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                              <button className="text-orange-400 items-center cursor-pointer px-5 font-semibold rounded shadow-md bg-green-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 text-center">
                                50
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-500 transition-colors hover:bg-gray-800 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-bold">
                              SUN User
                            </td>
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                              <button className="text-orange-400 items-center cursor-pointer px-5 font-semibold rounded shadow-md bg-green-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 text-center">
                                8
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg text-card-foreground gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full mx-auto grid justify-center items-center">
                <h2 className=" flex items-center font-bold gap-1  text-white text-2xl">
                  Billionaire
                </h2>
                <div>
                  <Image
                    src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                    height={500}
                    width={500}
                    alt="image not found"
                    className="w-20 h-20 mx-auto"
                  />
                  <h2 className="font-semibold tracking-tight text-center mt-2 text-white">
                    Comming Soon
                  </h2>
                </div>
              </div>
              <div className="rounded-lg text-card-foreground gap-1 shadow-sm p-4 bg-opacity-20 bg-gray-400 w-full mx-auto grid justify-center items-center">
                <h2 className=" flex items-center font-bold gap-1 text-white  text-2xl">
                  Trillionaire
                </h2>
                <div>
                  <Image
                    src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                    height={500}
                    width={500}
                    alt="image not found"
                    className="w-20 h-20 mx-auto"
                  />
                  <h2 className="font-semibold tracking-tight text-center mt-2 text-white">
                    Comming Soon
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-background p-2">
        <div className="bg-opacity-20 bg-gray-400">
          <div className="rounded-lg  text-card-foreground shadow-sm p-2 bg-transparent w-full">
            <h2 className="font-semibold tracking-tight text-2xl mb-4 text-white">
              Royalty Withdrawal Transactions
            </h2>
            <div className="p-6 pt-0">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-gray-500 text-center text-base border-none">
                      <th>Amound</th>
                      <th>Program</th>
                      <th>Date</th>
                      <th>TrxHASH</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyaltySalaryForm;
