import React from "react";

const Footer = () => {
  return (
    <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto">
      <footer className="footer footer-center bg-gray-400 bg-opacity-20 text-base-content p-4">
        <aside>
          <p className="text-[#A3A3A3] text-lg ">
            META PRO © 2024 all right reserved. v3.0.0
            <span className="text-blue-600 ml-2 cursor-pointer">Privacy Policy</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
