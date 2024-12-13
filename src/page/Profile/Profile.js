"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";

const Profile = () => {
  const { data: user } = useSession();
  const router = useRouter();
  const [myCartData, refetch] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });

  if (!user) {
    router.push("/");
  }

  return (
    <div className="lg:w-[70%] w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0  justify-around items-center">
        <div className="">
          <Image
            src={
              user?.user?.picture
                ? user?.user?.picture
                : "https://i.ibb.co.com/9bQnXmF/images-3.jpg"
            }
            width={500}
            height={500}
            alt="image not found"
            className="h-60 w-60 rounded-full mx-auto"
          />
          <p className="text-primary hover:underline text-center font-bold cursor-pointer mt-2">
            Edit Profile Pic
          </p>
        </div>
        <div className="rounded-lg border bg-black  shadow-sm border-primary/30">
          <div className="md:p-6">
            {/* edit items */}
            <div className="flex flex-col gap-4 m-2 text-white w-full ">
              <div className="flex justify-between gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">User Id :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?._id}
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring   hover:bg-gray-600 hover:text-accent-foreground p-2 text-white bg-transparent"
                  onClick={() => {
                    navigator.clipboard.writeText(user?.user?._id);
                  }}
                >
                  <FaCopy className="text-xl" />
                </button>
              </div>
              <div className="flex justify-between gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Wallet :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?.wallet.slice(0, 20)}
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring   hover:bg-gray-600 hover:text-accent-foreground p-2 text-white bg-transparent"
                  onClick={() => {
                    navigator.clipboard.writeText(user?.user?.wallet);
                  }}
                >
                  <FaCopy className="text-xl" />
                </button>
              </div>
              <div className="flex justify-between gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Raf By :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?.referBy}
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring   hover:bg-gray-600 hover:text-accent-foreground p-2 text-white bg-transparent"
                  onClick={() => {
                    navigator.clipboard.writeText(user?.user?.referBy);
                  }}
                >
                  <FaCopy className="text-xl" />
                </button>
              </div>
              <div className="flex justify-between gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Username :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?.username}
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring   hover:bg-gray-600 hover:text-accent-foreground p-2 text-white bg-transparent">
                  <FiEdit className="text-xl text-primary" />
                </button>
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Joined on :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?.joined}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Power Matrix Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={myCartData?.result?.proProgram?.length || 0}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Power Global Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"0"}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">X-Power Matrix Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"Coming Soon"}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">X-Power Global Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"Coming Soon"}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">2X-Power Matrix Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"Coming Soon"}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">2X-Power Global Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"Coming Soon"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
