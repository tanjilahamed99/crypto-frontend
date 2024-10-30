import { TbBrandTelegram } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto">
      <h2 className="text-green-500  text-2xl lg:text-4xl font-extrabold text-center md:mb-10 mb-5">
        Social Media
      </h2>

      <div className="flex items-center justify-center md:gap-8 gap-4">
        <div>
          <Link
            href={"/"}
          >
            <TbBrandTelegram className="text-white p-1 md:p-3 w-fit bg-background hover:scale-105 transition hover:bg-gray-600 bg-opacity-20 shadow-lg rounded-full hover:text-green-600 text-4xl md:text-6xl border-2 border-gray-600"/>
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
          >
            <CiYoutube className="text-white p-1 md:p-3 w-fit bg-background hover:scale-105 transition hover:bg-gray-600 bg-opacity-20 shadow-lg rounded-full hover:text-green-600 text-4xl md:text-6xl border-2 border-gray-600"/>
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
          >
            <IoLogoInstagram className="text-white p-1 md:p-3 w-fit bg-background hover:scale-105 transition hover:bg-gray-600 bg-opacity-20 shadow-lg rounded-full hover:text-green-600 text-4xl md:text-6xl border-2 border-gray-600"/>
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
          >
            <FaWhatsapp className="text-white p-1 md:p-3 w-fit bg-background hover:scale-105 transition hover:bg-gray-600 bg-opacity-20 shadow-lg rounded-full hover:text-green-600 text-4xl md:text-6xl border-2 border-gray-600"/>
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
          >
            <FaFacebookF className="text-white p-1 md:p-3 w-fit bg-background hover:scale-105 transition hover:bg-gray-600 bg-opacity-20 shadow-lg rounded-full hover:text-green-600 text-4xl md:text-6xl border-2 border-gray-600"/>
          </Link>
        </div>
        <div>
          <Link
            href={"/"}
          >
            <RiTwitterXLine className="text-white p-1 md:p-3 w-fit bg-background hover:scale-105 transition hover:bg-gray-600 bg-opacity-20 shadow-lg rounded-full hover:text-green-600 text-4xl md:text-6xl border-2 border-gray-600"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
