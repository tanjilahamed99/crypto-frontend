"use client";
import { BsPeopleFill } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import "./banner.css";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import useGetAllUsers from "@/hooks/useGetAllUsers/useGetAllUsers";
const Banner = () => {
  const [beat, setBeat] = useState(false);
  const [isUnLine, setIsUnLine] = useState(false);
  const [unLine, setUnLine] = useState(null);
  const router = useRouter();
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);
  const [totalLotteryEaring, setTotalLotteryEaring] = useState(0);
  const [totalRoyaltySalary, setTotalRoyaltySalary] = useState(0);
  const [websiteData] = useGetWebsiteData();
  const [allUsers] = useGetAllUsers();

  const handleUnLine = (e) => {
    setUnLine(e.target?.value);
  };

  const handleRegister = () => {
    if (isUnLine) {
      router.push(`/register?unLine=${unLine}`);
    } else {
      router.push(`/register?unLine=6729caf3a6953243197ef6bb`);
    }
  };

  useEffect(() => {
    if (!isUnLine) {
      setIsUnLine(false);
    }
  }, [isUnLine]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeat((prev) => !prev);
    }, 500); // Adjust the timing to sync with your beat

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (websiteData) {
      if (websiteData?.totalWithdrawal?.length > 0) {
        // Calculate the total deposit
        const total = websiteData?.totalWithdrawal.reduce(
          (sum, item) => sum + (item.amount || 0),
          0
        );
        setTotalWithdrawal(total);
      }
      if (websiteData?.totalRoyaltySalary?.length > 0) {
        // Calculate the total deposit
        const total = websiteData?.totalRoyaltySalary.reduce(
          (sum, item) => sum + (item.amount || 0),
          0
        );
        setTotalRoyaltySalary(total);
      }
      if (websiteData?.totalLotteryWithdrawal?.length > 0) {
        // Calculate the total deposit
        const total = websiteData?.totalLotteryWithdrawal.reduce(
          (sum, item) => sum + (item.amount || 0),
          0
        );
        setTotalLotteryEaring(total);
      }
    }
  }, [websiteData]);

  return (
    <div className="lg:w-[80%] w-[90%] mx-auto my-10 -mt-1 pt-24">
      {/* banner main part */}
      <h2 className="text-3xl md:text-6xl font-bold text-white text-center ">
        Welcome to
      </h2>
      <h2
        className="text-4xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent animate-gradient-text"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ff7eb3, #ff65a3, #7afcff, #feff9c, #fff740, #ff00a7, #00d2ff, #ff5f00, #ff00c8, #00ffeb, #ffa07a, #00ff7f, #dda0dd, #ff6347, #4682b4, #7fff00)",
          backgroundSize: "200% 200%",
        }}
      >
        ISTIMATE-PRO
      </h2>

      <div className="md:my-10 my-5">
        <Image
          src={websiteData?.banner?.mainImage || ""}
          height={500}
          width={500}
          alt="image not found"
          className="mx-auto w-80 md:h-80"
        />
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="text-white mt-5 h-10 w-60 md:h-20 md:w-80 rounded-full font-extrabold text-2xl md:text-3xl mx-auto flex justify-center items-center mb-5 cursor-pointer"
        style={{
          backgroundImage: "linear-gradient(90deg, #e56910 0%, #e56910 100%)",
          border: "1px solid #0F0",
          boxShadow:
            "0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5), inset 0 -0.25rem 1.5rem #6e0f9b, inset 0 0.75rem 0.5rem rgba(255, 255, 255, 0.4), inset 0 0.25rem 0.5rem #b446cf",
        }}
      >
        REGISTER
      </button>

      <dialog id="my_modal_1" className="modal custom-backdrop">
        <div className="modal-box bg-black bg-opacity-20 text-white shadow-lg border border-gray-800">
          <div className="modal-action mt-0">
            <form method="dialog">
              <button className="hover:shadow-lg">
                <RxCross2 className="text-lg hover:font-extrabold" />
              </button>
            </form>
          </div>
          <h3 className="font-bold text-lg">Register User</h3>
          <p className="py-4">Do you already have Upline?</p>
          <div className="space-x-3 mb-4 grid grid-cols-2">
            <button
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-gray-700 hover:text-gray-700-foreground h-10 px-4 py-2 flex-1 ${
                isUnLine ? "border-primary" : "border-gray-700"
              }`}
              onClick={() => setIsUnLine(true)}
            >
              Yes
            </button>
            <button
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-gray-700 hover:text-gray-700-foreground h-10 px-4 py-2 flex-1 ${
                !isUnLine ? "border-primary" : "border-gray-700"
              }`}
              onClick={() => setIsUnLine(false)}
            >
              No
            </button>
          </div>

          {isUnLine && (
            <input
              className="bg-black border border-gray-700 w-full  p-2 rounded-md"
              placeholder="Upline Id"
              onChange={handleUnLine}
            />
          )}

          <div className="flex justify-end ">
            <button
              onClick={handleRegister}
              className="text-white bg-primary btn hover:bg-[#e08e2a] border-0  mt-5"
            >
              Register
            </button>
          </div>
        </div>
      </dialog>

      {/* analytics */}
      <div className="bg-gray-400 xl:h-[250px] py-10 xl:py-0 px-5 flex w-full justify-center items-center bg-opacity-20 ">
        <div className="w-full">
          <h2 className="text-primary text-2xl md:text-3xl text-center font-extrabold mb-5 md:mb-10">
            Analytics
          </h2>
          <div className="grid items-start text-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-5 justify-center">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <BsPeopleFill className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                  {allUsers?.length}
                </h2>
              </div>
              <h2 className="text-primary font-bold">All Participants</h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                  {totalRoyaltySalary || 0}
                </h2>
              </div>
              <h2 className="text-primary font-bold">
                Royalty Monthly Salary Earning
              </h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                  {totalLotteryEaring || 0}
                </h2>
              </div>
              <h2 className="text-primary font-bold">Lottery Earning</h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                  {totalWithdrawal || "0.00"}
                </h2>
              </div>
              <h2 className="text-primary font-bold">Total profit earned</h2>
            </div>
            <div>
              <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                March 09 2024
              </h2>
              <h2 className="text-primary font-bold">Creation Date</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
