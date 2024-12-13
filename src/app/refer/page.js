import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import ReferCon from "@/page/refer/Refer";
import React from "react";

const Refer = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />

        <div className="pt-20 lg:pt-24">
          <ReferCon />
        </div>

        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Refer;
