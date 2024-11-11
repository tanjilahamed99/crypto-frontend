import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AdminLogin from "@/page/admin/AdminLogin/AdminLogin";
import Contact from "@/page/Home/Contact/Contact";
import React from "react";

const Page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <AdminLogin />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
