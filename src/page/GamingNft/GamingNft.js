"use client";

import useGetAllGamingNft from "@/hooks/useGamingNft/useGetAllGamingNft";
import Image from "next/image";
import { AiTwotoneDollar } from "react-icons/ai";
import BuyGamingNft from "./BuyGamingNft";
import { useSession } from "next-auth/react";
import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";
const GamingNft = () => {
  const [gamingNft, refetch] = useGetAllGamingNft();
  const { data: user } = useSession();
  const [myCartData] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });

  return (
    <div className=" bg-background p-2  w-full lg:w-[1000px] xl:w-[1350px] mx-auto space-y-3">
      <h2 className="font-semibold tracking-tight text-2xl mb-4 text-white">
        Gaming NFTS
      </h2>
      <div className="p-6  flex flex-col md:flex-row gap-4 items-center md:items-stretch bg-opacity-20 bg-gray-400">
        {gamingNft?.gamingNft?.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg text-card-foreground shadow-sm p-2 space-y-3 w-full max-w-sm transform  transition-transform duration-100 hover:scale-105 bg-gray-400 bg-opacity-20 hover:bg-gray-600 py-10"
          >
            <h2 className="font-semibold tracking-tight text-center  text-lg text-white">
              {item?.title}
            </h2>
            <Image
              src={item?.image || ""}
              height={500}
              width={500}
              alt="image not found"
              className="w-20 h-20 mx-auto"
            />
            <h2 className="font-semibold tracking-tight text-center  text-lg text-white flex items-center gap-2 justify-center">
              Price :{" "}
              <span className="flex items-center gap-1 ">
                <AiTwotoneDollar className="text-primary text-xl" />
                {item?.price}
              </span>
            </h2>

            <div className="flex justify-center mx-auto">
              <BuyGamingNft
                id={item?._id}
                isEthPayment={true}
                lotteryData={item}
                price={String(item?.price)}
                refetchAll={refetch}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-opacity-20 bg-gray-400">
        <div className="rounded-lg  text-card-foreground shadow-sm p-2 bg-transparent w-full">
          <div className="p-6 flex flex-col md:flex-row gap-4 items-center md:items-stretch">
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

      {/* my nft */}

      <div>
        <h2 className="text-2xl font-semibold text-white mt-5 mb-3">My Gaming NFT</h2>

        <div className="grid items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {myCartData?.result?.gamingNft?.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg text-card-foreground shadow-sm p-2 space-y-3 w-full max-w-sm transform  transition-transform duration-100 hover:scale-105 bg-gray-400 bg-opacity-20 hover:bg-gray-600 py-10"
            >
              <h2 className="font-semibold tracking-tight text-center  text-lg text-white">
                {item?.title}
              </h2>
              <Image
                src={item?.image || ""}
                height={500}
                width={500}
                alt="image not found"
                className="w-20 h-20 mx-auto"
              />
              <h2 className="font-semibold tracking-tight text-center  text-lg text-white flex items-center gap-2 justify-center">
                Price :{" "}
                <span className="flex items-center gap-1 ">
                  <AiTwotoneDollar className="text-primary text-xl" />
                  {item?.price}
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamingNft;
