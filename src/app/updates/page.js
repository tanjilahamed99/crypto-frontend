import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import Updates from "@/page/Updates/Updates";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />

        <div className="pt-20 lg:pt-24">
          <Updates />
        </div>

        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default page;
