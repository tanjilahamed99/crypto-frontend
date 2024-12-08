import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div>
        <div className="bg-black">
          <Navbar />

          <div className="pt-20 lg:pt-24">
            {/* level ain part */}
            <div className="lg:w-[80%] w-[90%] mx-auto">
              <h2 className="text-white text-2xl font-bold">News & Events</h2>

              <div className="h-[100vh] flex flex-col justify-center items-center gap-3">
                <div>
                  <Image
                    src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                    width={500}
                    height={500}
                    alt="image not found"
                    className="h-40 w-40 rounded-full"
                  />
                  <h2 className="text-2xl font-bold text-primary">
                    Coming Soon...
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
