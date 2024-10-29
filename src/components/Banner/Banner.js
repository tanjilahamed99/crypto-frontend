"use client";
import { BsPeopleFill } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import Image from "next/image";
import earth from "../../../public/images/earth.png";
import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.png";
import img3 from "../../../public/images/img3.png";
import img4 from "../../../public/images/img4.png";
import img5 from "../../../public/images/img6.png";
import img6 from "../../../public/images/img5.png";
import img7 from "../../../public/images/mars.png";
import { useEffect, useState } from "react";

const Banner = () => {
  const [beat, setBeat] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeat((prev) => !prev);
    }, 500); // Adjust the timing to sync with your beat

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:w-[80%] w-[90%] mx-auto my-10">
      {/* banner main part */}

      <h2 className="text-3xl md:text-6xl font-bold text-white text-center">
        Welcome to
      </h2>
      <h2
        className="text-3xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-text"
        style={{ backgroundSize: "200% 200%" }}
      >
        META PRO SPACE
      </h2>

      <div>
        <div className="relative flex items-center justify-center w-full h-screen bg-black">
          {/* Central "Sun" element */}
          <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center z-20 shadow-lg">
            <div className="flex items-center justify-center h-screen">
              <div
                className={`w-32 h-32 md:w-48 md:h-48 relative transition-transform duration-300 ${
                  beat ? "scale-110" : "scale-100"
                }`}
              >
                <Image
                  src={earth}
                  alt="Logo"
                  layout="fill"
                  className={`object-contain ${
                    beat ? "gradient-animation" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Orbit Paths */}
          <div className="absolute w-[15rem] h-[15rem] border border-gray-500 rounded-full"></div>
          <div className="absolute w-[20rem] h-[20rem] border border-gray-500 rounded-full"></div>
          <div className="absolute w-[25rem] h-[25rem] border border-gray-500 rounded-full"></div>
          <div className="absolute w-[30rem] h-[30rem] border border-gray-500 rounded-full"></div>
          <div className="absolute w-[35rem] h-[35rem] border border-gray-500 rounded-full"></div>

          {/* Orbiting circles with independent circular motion */}
          <div className="absolute inset-0">
            {/* Earth - First Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-earth">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={earth}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>

            {/* Mars - Second Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-mars">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={img1}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>

            {/* Venus - Third Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-venus">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={img2}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>

            {/* Jupiter - Fourth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-jupiter">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={img3}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>

            {/* Saturn - Fifth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-Saturn">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={img4}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
            {/* Saturn - Fifth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-1">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={img5}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
            {/* Saturn - Fifth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-2">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={img6}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
            {/* Saturn - Fifth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={img7}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={earth}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button>Register</button>
      {/* analytics */}
      <div className="bg-gray-400 xl:h-[250px] py-10 xl:py-0 px-5 flex w-full justify-center items-center bg-opacity-20 ">
        <div className="w-full">
          <h2 className="text-primary text-2xl md:text-3xl text-center font-extrabold mb-5 md:mb-10">
            Analytics
          </h2>
          <div className="grid items-start text-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-5 justify-center">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <BsPeopleFill className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                  295897
                </h2>
              </div>
              <h2 className="text-primary font-bold">All Participants</h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                  725423.42
                </h2>
              </div>
              <h2 className="text-primary font-bold">
                Royalty Monthly Salary Earning
              </h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                  0
                </h2>
              </div>
              <h2 className="text-primary font-bold">Lottery Earning</h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                  5528290
                </h2>
              </div>
              <h2 className="text-primary font-bold">Total profit earned</h2>
            </div>
            <div>
              <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
                March 09 2024
              </h2>
              <h2 className="text-primary font-bold">Creation Date</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
