"use client";
import Image from "next/image";

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

const Certified = () => {
  const data = [
    {
      img: "https://i.ibb.co.com/4tVVvhK/earth.png",
      name: "Certik",
    },
    {
      img: "https://i.ibb.co.com/4tVVvhK/earth.png",
      name: "meta",
    },
    {
      img: "https://i.ibb.co.com/4tVVvhK/earth.png",
      name: "Hindawi",
    },
    {
      img: "https://i.ibb.co.com/4tVVvhK/earth.png",
      name: "Tenderly",
    },
    {
      img: "https://i.ibb.co.com/4tVVvhK/earth.png",
      name: "Alchemy",
    },
    {
      img: "https://i.ibb.co.com/4tVVvhK/earth.png",
      name: "Coinsbench",
    },
    {
      img: "https://i.ibb.co.com/4tVVvhK/earth.png",
      name: "Moralis",
    },
    {
      img: "https://i.ibb.co.com/4tVVvhK/earth.png",
      name: "InterFi",
    },
  ];

  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto">
      <h2 className="text-primary  text-2xl lg:text-3xl font-extrabold text-center md:mb-10 mb-5">
        Certified By
      </h2>

      <div className="hidden lg:grid grid-cols-8 items-center ">
        {data?.map((item, idx) => (
          <div key={idx}>
            <Image
              alt="image not found"
              src={item?.img}
              height={500}
              width={500}
              className="w-20 mx-auto mb-2"
            />
            <h2 className="text-white font-semibold text-center">
              {item?.name}
            </h2>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={2.5}
          hashNavigation={{
            watchState: true,
          }}
          speed={2000}
          autoplay={{
            delay: 100, // Adjust delay as needed (3000ms = 3s)
            disableOnInteraction: false, // Autoplay continues even after interactions
          }}
          modules={[Pagination, Navigation, HashNavigation, Autoplay]}
          className="mySwiper w-full"
        >
          {data?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div key={idx}>
                <Image
                  alt="image not found"
                  src={item?.img}
                  height={500}
                  width={500}
                  className="w-20 mx-auto mb-2"
                />
                <h2 className="text-white font-semibold text-center">
                  {item?.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:inline lg:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          hashNavigation={{
            watchState: true,
          }}
          speed={2000}
          autoplay={{
            delay: 100, // Adjust delay as needed (3000ms = 3s)
            disableOnInteraction: false, // Autoplay continues even after interactions
          }}
          modules={[Pagination, Navigation, HashNavigation, Autoplay]}
          className="mySwiper w-full"
        >
          {data?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div key={idx}>
                <Image
                  alt="image not found"
                  src={item?.img}
                  height={500}
                  width={500}
                  className="w-20 mx-auto mb-2"
                />
                <h2 className="text-white font-semibold text-center">
                  {item?.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certified;
