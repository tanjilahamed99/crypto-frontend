import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {/* level ain part */}
      <div className="lg:w-[80%] w-[90%] mx-auto">
        <h2 className="text-white text-2xl font-bold">News & Events</h2>

        <div className="h-[100vh] flex flex-col justify-center items-center">
          <div>
            <Image
              src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
              width={500}
              height={500}
              alt="image not found"
              className="h-20 w-10 rounded-full"
            />
            <h2 className="text-2xl font-bold text-primary">Coming Soon...</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
