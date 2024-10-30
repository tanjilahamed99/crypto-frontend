import Image from "next/image";
import { FaArrowDown } from "react-icons/fa"; //
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const RoadMap = () => {
  const steps = ["Step 1: Initialization", "Step 2: Growth", "Step 3: Success"];
  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto ">
      <div className="bg-gray-400  py-10 px-5 grid w-full justify-center items-center bg-opacity-20 ">
        <h2 className="text-primary  text-2xl lg:text-3xl font-extrabold text-center mb-5">
          Road Map
        </h2>

        <p className="text-white font-semibold text-center">
          Istimate-Pro is the
          <span className="text-green-400 mx-1">WORLDS NO.1 DECENTRALIZED</span>
          platform, launching a powerful programs one by one.
        </p>

        <p className="text-primary font-semibold mt-1 text-center">
          Our vision is to make a extra ordinary life for all members with own
          <span className="text-green-400 ml-1">
            Rules, Regulations & Laws.
          </span>
        </p>

        <div>
          {/* roadmap main part */}
          <div className="flex flex-col  my-10 space-y-4">
            {/* Project Logo */}
            <div className="flex items-center mt-10 gap-5 justify-center">
              <Image
                src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                width={500}
                height={500}
                alt="image not found"
                className="h-14 w-14 rounded-full"
              />

              <h2 className="flex text-white  font-bold h-12 items-center w-80 justify-center  rounded-lg border  border-green-500">
                Millionaire Program
              </h2>
            </div>
          </div>
          {/* Single Connecting Line from Logo */}
          <div className="ml-52 -mt-10">
            <div className=" border-l-2 border-green-500 h-[350px] relative">
              {/* Branching Lines and Steps */}

              <div className="flex items-center space-x-4 absolute mt-10">
                <div className="flex items-center space-x-2">
                  {/* Arrow branching out to each step with increased length */}
                  <div className="flex items-center text-gray-500">
                    <hr className="w-10 border border-gray-500" />
                    <IoIosArrowForward className="-ml-2.5 text-xl" />
                  </div>
                  {/* Step Content */}
                  <div className="font-bold">
                    <p className="text-green-500 w-full">
                      Power Matrix{" "}
                      <span className="text-primary">(Q1 2024)</span>
                    </p>
                  </div>
                </div>
                {/* Adjust top spacing dynamically for each step */}
                {/* <div className="absolute left-0 w-1 bg-gray-300"></div> */}
              </div>
              <div className="flex items-center space-x-4 absolute mt-[100px]">
                <div className="flex items-center space-x-2">
                  {/* Arrow branching out to each step with increased length */}
                  <div className="flex items-center text-gray-500">
                    <hr className="w-10 border border-gray-500" />
                    <IoIosArrowForward className="-ml-2.5 text-xl" />
                  </div>
                  {/* Step Content */}
                  <div className="font-bold">
                    <p className="text-green-500 w-full">
                      Power Global{" "}
                      <span className="text-primary">(Q2 2024)</span>
                    </p>
                  </div>
                </div>
                {/* Adjust top spacing dynamically for each step */}
                {/* <div className="absolute left-0 w-1 bg-gray-300"></div> */}
              </div>
              <div className="flex items-center space-x-4 absolute mt-[155px]">
                <div className="flex items-center space-x-2">
                  {/* Arrow branching out to each step with increased length */}
                  <div className="flex items-center text-gray-500">
                    <hr className="w-10 border border-gray-500" />
                    <IoIosArrowForward className="-ml-2.5 text-xl" />
                  </div>
                  {/* Step Content */}
                  <div className="font-bold">
                    <p className="text-green-500 w-full">
                      Gaming NFTS{" "}
                      <span className="text-primary">(Q3 2024)</span>
                    </p>
                  </div>
                </div>
                {/* Adjust top spacing dynamically for each step */}
                {/* <div className="absolute left-0 w-1 bg-gray-300"></div> */}
              </div>
              <div className="flex items-center space-x-4 absolute mt-[210px]">
                <div className="flex items-center space-x-2">
                  {/* Arrow branching out to each step with increased length */}
                  <div className="flex items-center text-gray-500">
                    <hr className="w-10 border border-gray-500" />
                    <IoIosArrowForward className="-ml-2.5 text-xl" />
                  </div>
                  {/* Step Content */}
                  <div className="font-bold">
                    <p className="text-green-500 w-full">
                      Royalty Salary{" "}
                      <span className="text-primary">(Q4 2024)</span>
                    </p>
                  </div>
                </div>
                {/* Adjust top spacing dynamically for each step */}
                {/* <div className="absolute left-0 w-1 bg-gray-300"></div> */}
              </div>
            </div>
          </div>

          {/* roadmap main part */}
          <div className="flex flex-col  -mt-10 space-y-4">
            {/* Project Logo */}
            <div className="flex items-start mt-10 gap-5 justify-center">
              <Image
                src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                width={500}
                height={500}
                alt="image not found"
                className="h-14 w-14 rounded-full"
              />

              <div className="space-y-2">
                <h2 className="flex text-white  font-bold h-12 items-center w-80 justify-center  rounded-lg border  border-green-500">
                  Lottery Jackpot (Lucky Draw)
                </h2>
                <h2 className="text-primary text-center font-bold">
                  (Q3 2024)
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
