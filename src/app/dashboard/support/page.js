import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import Image from "next/image";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 ">
        {/* level ain part */}

        <div className="lg:w-[80%] w-[90%] mx-auto">
          <h2 className="text-white text-2xl font-bold">Support</h2>

          <div className="mt-5 flex flex-col lg:flex-row items-center gap-10">
            <Image
              className=""
              src={"https://i.ibb.co.com/7S4vMYg/pngwing-com-24.png"}
              alt="image not found"
              height={500}
              width={500}
            />

            <div className="space-y-4 ">
              <h2 className="md:text-4xl font-bold text-xl text-white text-start">
                If you have any queries related to{" "}
                <span className="text-primary">PRO POWER MATRIX</span> or
                <span className="text-primary">PRO POWER GLOBAL</span> please
                click below
              </h2>

              <div className="flex justify-center">
                <button className="relative flex items-center justify-center px-8 py-3 text-xl text-white rounded-md font-sans font-bold bg-green-600 hover:bg-green-500 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 active:scale-95 shadow-md">
                  Chat With Us
                  <span className="absolute inset-0 bg-green-400 rounded-md blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
