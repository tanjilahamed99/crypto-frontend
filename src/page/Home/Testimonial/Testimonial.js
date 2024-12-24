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
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import TestimonailVideo from "./TestimonailVideo";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [websiteData] = useGetWebsiteData();

  const [linkIds, setLinkIds] = useState([]);

  // Function to extract the video ID from YouTube URLs
  const extractVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      // If it's a youtu.be link, the video ID is in the pathname
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1); // Removes the leading '/'
      }
      // If it's a standard YouTube URL, the video ID is in the "v" query parameter
      if (
        urlObj.hostname === "www.youtube.com" ||
        urlObj.hostname === "youtube.com"
      ) {
        return urlObj.searchParams.get("v");
      }
    } catch (error) {
      console.error("Invalid YouTube URL:", url);
      return null;
    }
  };

  useEffect(() => {
    // Extract video IDs from the provided URLs
    if (websiteData?.testimonial && Array.isArray(websiteData?.testimonial)) {
      const ids = websiteData?.testimonial
        .map((url) => extractVideoId(url))
        .filter((id) => id);
      setLinkIds(ids);
    }
  }, [websiteData?.testimonial]);

  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto">
      {" "}
      <h2 className="text-primary  text-2xl lg:text-3xl font-extrabold text-center md:mb-10 mb-5">
        Testimonials Video
      </h2>
      <div>
        <TestimonailVideo data={websiteData?.testimonial} />
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
            delay: 4000, // Adjust delay as needed (3000ms = 3s)
            disableOnInteraction: false, // Autoplay continues even after interactions
          }}
          modules={[Pagination, Navigation, HashNavigation, Autoplay]}
          className="mySwiper w-full"
        >
          {linkIds?.map((id, idx) => (
            <SwiperSlide key={idx}>
              <iframe
                key={idx}
                src={`https://www.youtube.com/embed/${id}`}
                title={`YouTube Video ${idx + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                
                style={{ marginBottom: "20px" }}
                className="w-full h-[200px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
