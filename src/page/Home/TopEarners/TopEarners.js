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
import TopEarnersCard from "./TopEarnersCard";

const TopEarners = () => {
  const data = [
    {
      user: "asif",
      userId: "5435345435435",
      totalProfit: "1230",
      totalPartner: "123",
      totalTeam: "12",
    },
    {
      user: "kaif",
      userId: "34543543543",
      totalProfit: "1230",
      totalPartner: "123",
      totalTeam: "12",
    },
    {
      user: "jonson",
      userId: "3453455435",
      totalProfit: "1230",
      totalPartner: "123",
      totalTeam: "12",
    },
    {
      user: "niloy",
      userId: "5345435543",
      totalProfit: "1230",
      totalPartner: "123",
      totalTeam: "12",
    },
    {
      user: "hero",
      userId: "34543543",
      totalProfit: "1230",
      totalPartner: "123",
      totalTeam: "12",
    },
  ];

  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto">
      <h2 className="text-primary  text-2xl lg:text-3xl font-extrabold text-center md:mb-10 mb-5">
        Top Earners
      </h2>

      <div className=" mt-3 md:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          hashNavigation={{
            watchState: true,
          }}
          speed={1000}
          autoplay={{
            delay: 1000, // Adjust delay as needed (3000ms = 3s)
            disableOnInteraction: false, // Autoplay continues even after interactions
          }}
          modules={[Pagination, Navigation, HashNavigation, Autoplay]}
          className="mySwiper w-full"
        >
          {data?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <TopEarnersCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" mt-3 hidden md:inline lg:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          hashNavigation={{
            watchState: true,
          }}
          speed={1000}
          autoplay={{
            delay: 1000, // Adjust delay as needed (3000ms = 3s)
            disableOnInteraction: false, // Autoplay continues even after interactions
          }}
          modules={[Pagination, Navigation, HashNavigation, Autoplay]}
          className="mySwiper w-full"
        >
          {data?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <TopEarnersCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-3 hidden lg:inline">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          hashNavigation={{
            watchState: true,
          }}
          speed={1000}
          autoplay={{
            delay: 1000, // Adjust delay as needed (3000ms = 3s)
            disableOnInteraction: false, // Autoplay continues even after interactions
          }}
          modules={[Pagination, Navigation, HashNavigation, Autoplay]}
          className="mySwiper w-full"
        >
          {data?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <TopEarnersCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopEarners;
