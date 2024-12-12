"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Pagination,
  Navigation,
  HashNavigation,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";

const RoyaltyTag = () => {
  const [websiteData] = useGetWebsiteData();
  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto">
      <h2 className="text-primary  text-2xl lg:text-3xl font-extrabold text-center md:mb-10 mb-5">
        Royalty Tag
      </h2>

      <p className="text-white text-center">
        It is a <span className="text-primary">Status Program</span> where you
        receive royalty bonuses. The higher status of <br /> your NFT, the
        higher bonus salary you will receive on{" "}
        <span className="text-primary">Every Months</span> first date.
      </p>

      <div className="lg:grid grid-cols-4 hidden mt-10 gap-5 ">
        {websiteData?.royaltyTag?.slice(0, 4).map((item, idx) => (
          <div key={idx}>
            <Image
              src={item}
              alt="image not found"
              height={500}
              width={500}
              className="w-[200px] h-[200px] mx-auto"
            />
          </div>
        ))}
      </div>

      <div className="lg:hidden mt-3">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          hashNavigation={{
            watchState: true,
          }}
          speed={1000}
          autoplay={{
            delay: 4000, // Adjust delay as needed (3000ms = 3s)
            disableOnInteraction: false, // Autoplay continues even after interactions
          }}
          modules={[Pagination, Navigation, HashNavigation, Autoplay]}
          className="mySwiper w-full"
        >
          {websiteData?.royaltyTag?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={item}
                alt="image not found"
                height={500}
                width={500}
                className="w-[200px] mx-auto h-[200px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoyaltyTag;
