"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import useGetWebsiteData from "@/hooks/useGetWebsiteData/userGetWebsiteData";
import Contact from "@/page/Home/Contact/Contact";
import React from "react";

const PrivacyPolicy = () => {
  const [websiteData] = useGetWebsiteData();

  return (
    <div>
      <div className="bg-black">
        <Navbar />

        <div className="pt-20 lg:pt-24 w-full lg:w-[1000px] xl:w-[1350px] mx-auto">
          <h2 className="text-white text-2xl font-extrabold">Privacy Policy</h2>

          <div className="text-white font-semibold mt-2">
            <p>{websiteData?.privacyPolicy}</p>
          </div>
        </div>

        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
