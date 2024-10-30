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

const Testimonial = () => {
  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto">
      {" "}
      <h2 className="text-primary  text-2xl lg:text-3xl font-extrabold text-center md:mb-10 mb-5">
        Testimonials Video
      </h2>
      <div className="lg:grid grid-cols-3 hidden">
        <div>
          <video src="/" controls autoPlay loop muted />
        </div>
        <div>
          <video src="/" controls autoPlay loop muted />
        </div>
        <div>
          <video src="/" controls autoPlay loop muted />
        </div>
      </div>
      <div className="lg:hidden">
        <Swiper
          spaceBetween={10}
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
          <SwiperSlide >
            <video src="/" controls autoPlay loop muted />
          </SwiperSlide>
          <SwiperSlide >
            <video src="/" controls autoPlay loop muted />
          </SwiperSlide>
          <SwiperSlide >
            <video src="/" controls autoPlay loop muted />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
