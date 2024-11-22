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

const LotterySlider = ({ view, data }) => {
  // const data = [
  //   {
  //     img: "https://i.ibb.co.com/xMfmVQ2/1629198964029.jpg",
  //   },
  //   {
  //     img: "https://i.ibb.co.com/DKw4yYc/crypto-lottery.png",
  //   },
  //   {
  //     img: "https://i.ibb.co.com/wKs80w9/download.jpg",
  //   },
  //   {
  //     img: "https://i.ibb.co.com/xMfmVQ2/1629198964029.jpg",
  //   },
  //   {
  //     img: "https://i.ibb.co.com/DKw4yYc/crypto-lottery.png",
  //   },
  //   {
  //     img: "https://i.ibb.co.com/wKs80w9/download.jpg",
  //   },
  // ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={view}
        hashNavigation={{
          watchState: true,
        }}
        speed={1500}
        autoplay={{
          delay: 3000, // Adjust delay as needed (3000ms = 3s)
          disableOnInteraction: false, // Autoplay continues even after interactions
        }}
        modules={[Pagination, Navigation, HashNavigation, Autoplay]}
        className="mySwiper w-full"
      >
        {data?.map((item, idx) => (
          <SwiperSlide className="cursor-pointer" key={idx}>
            <Image
              src={item?.image}
              alt="image not found"
              height={500}
              width={500}
              className="w-full h-[200px] md:h-[300px] lg:h-[400px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LotterySlider;
