"use client";
import { BsPeopleFill } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import "./banner.css";
const Banner = () => {
  const [beat, setBeat] = useState(false);
  const [isUnLine, setIsUnLine] = useState(false);
  const [unLine, setUnLine] = useState(null);
  const router = useRouter();

  const handleUnLine = (e) => {
    setUnLine(e.target?.value);
  };

  const handleRegister = () => {
    if (isUnLine) {
      router.push(`/register?unLine=${unLine}`);
    } else {
      router.push(`/register?unLine=12321332`);
    }
  };

  useEffect(() => {
    if (!isUnLine) {
      setIsUnLine(false);
    }
  }, [isUnLine]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeat((prev) => !prev);
    }, 500); // Adjust the timing to sync with your beat

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:w-[80%] w-[90%] mx-auto my-10 -mt-1 pt-24">
      {/* banner main part */}
      <h2 className="text-3xl md:text-6xl font-bold text-white text-center ">
        Welcome to
      </h2>
      <h2
        className="text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent animate-gradient-text"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ff7eb3, #ff65a3, #7afcff, #feff9c, #fff740, #ff00a7, #00d2ff, #ff5f00, #ff00c8, #00ffeb, #ffa07a, #00ff7f, #dda0dd, #ff6347, #4682b4, #7fff00)",
          backgroundSize: "200% 200%",
        }}
      >
        Istimate-Pro
      </h2>

      <div>
        <div className="relative hidden md:flex items-center justify-center w-full h-[650px]  bg-black">
          {/* Central "Sun" element */}
          <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center z-20 shadow-lg">
            <div className="flex items-center justify-center h-screen">
              <div
                className={`w-32 h-32 md:w-48 md:h-48 relative transition-transform duration-300 ${
                  beat ? "scale-110" : "scale-100"
                }`}
              >
                <Image
                  src={"https://i.ibb.co.com/4tVVvhK/earth.png"}
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
                  src={"https://i.ibb.co.com/4tVVvhK/earth.png"}
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
                  src={"https://i.ibb.co.com/tX34JBX/img1.png"}
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
                  src={"https://i.ibb.co.com/tKQspfj/img2.png"}
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
                  src={"https://i.ibb.co.com/5r6cLCp/img3.png"}
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
                  src={"https://i.ibb.co.com/KV5kkxs/img4.png"}
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
                  src={"https://i.ibb.co.com/GVK5cNK/img5.png"}
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
                  src={"https://i.ibb.co.com/6JkFFGz/img6.png"}
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
                  src={"https://i.ibb.co.com/SRssZr5/mars.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/4tVVvhK/earth.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative  flex md:hidden items-center justify-center w-full h-[350px]  bg-black">
          {/* Central "Sun" element */}
          <div className="w-32 h-32 rounded-full flex items-center justify-center z-20 shadow-lg">
            <div className="flex items-center justify-center h-screen">
              <div
                className={`w-10 h-10  relative transition-transform duration-300 ${
                  beat ? "scale-110" : "scale-100"
                }`}
              >
                <Image
                  src={"https://i.ibb.co.com/4tVVvhK/earth.png"}
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
          <div className="absolute w-[5rem] h-[5rem] border border-gray-500 rounded-full"></div>
          <div className="absolute w-[8rem] h-[8rem] border border-gray-500 rounded-full"></div>
          <div className="absolute w-[11rem] h-[11rem] border border-gray-500 rounded-full"></div>
          <div className="absolute w-[14rem] h-[14rem] border border-gray-500 rounded-full"></div>
          <div className="absolute w-[17rem] h-[17rem] border border-gray-500 rounded-full"></div>

          {/* Orbiting circles with independent circular motion */}
          <div className="absolute inset-0">
            {/* Earth - First Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-mob1">
              <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/4tVVvhK/earth.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>

            {/* Mars - Second Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-mob2">
              <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/tX34JBX/img1.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>

            {/* Venus - Third Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-mob3">
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/tKQspfj/img2.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>

            {/* Jupiter - Fourth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-mob4">
              <div className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/5r6cLCp/img3.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>

            {/* Saturn - Fifth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-mob5">
              <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/KV5kkxs/img4.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
            {/* Saturn - Fifth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-mob6">
              <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/GVK5cNK/img5.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
            {/* Saturn - Fifth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-mob7">
              <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/6JkFFGz/img6.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
            {/* Saturn - Fifth Orbit */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-mob8">
              <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/SRssZr5/mars.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-mob9">
              <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center text-white">
                <Image
                  src={"https://i.ibb.co.com/4tVVvhK/earth.png"}
                  height={500}
                  width={500}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="text-white h-10 w-60 md:h-20 md:w-80 rounded-full text-2xl md:text-3xl mx-auto flex justify-center items-center mb-5 cursor-pointer"
        style={{
          backgroundImage: "linear-gradient(90deg, #e56910 0%, #e56910 100%)",
          border: "1px solid #0F0",
          boxShadow:
            "0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5), inset 0 -0.25rem 1.5rem #6e0f9b, inset 0 0.75rem 0.5rem rgba(255, 255, 255, 0.4), inset 0 0.25rem 0.5rem #b446cf",
        }}
      >
        Register
      </button>

      <dialog id="my_modal_1" className="modal custom-backdrop">
        <div className="modal-box bg-black bg-opacity-20 text-white shadow-lg border border-gray-800">
          <div className="modal-action mt-0">
            <form method="dialog">
              <button className="hover:shadow-lg">
                <RxCross2 className="text-lg hover:font-extrabold" />
              </button>
            </form>
          </div>
          <h3 className="font-bold text-lg">Register User</h3>
          <p className="py-4">Do you already have Upline?</p>
          <div className="space-x-3 mb-4 grid grid-cols-2">
            <button
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-gray-700 hover:text-gray-700-foreground h-10 px-4 py-2 flex-1 ${
                isUnLine ? "border-primary" : "border-gray-700"
              }`}
              onClick={() => setIsUnLine(true)}
            >
              Yes
            </button>
            <button
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-gray-700 hover:text-gray-700-foreground h-10 px-4 py-2 flex-1 ${
                !isUnLine ? "border-primary" : "border-gray-700"
              }`}
              onClick={() => setIsUnLine(false)}
            >
              No
            </button>
          </div>

          {isUnLine && (
            <input
              className="bg-black border border-gray-700 w-full  p-2 rounded-md"
              placeholder="Upline Id"
              onChange={handleUnLine}
            />
          )}

          <div className="flex justify-end ">
            <button
              onClick={handleRegister}
              className=" bg-primary btn hover:bg-[#e08e2a] border-0  mt-5"
            >
              Register
            </button>
          </div>
        </div>
      </dialog>

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
