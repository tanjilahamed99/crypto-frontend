import AuthorizeUser from "@/components/AuthorizeUser/AuthorizeUser";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import DashboardProfile from "@/page/DashBoard/DashboardProfile/DashboardProfile";
import Contact from "@/page/Home/Contact/Contact";
import React from "react";

const Hello = () => {
  return (
    <AuthorizeUser>
      <div>
        <Navbar />

        <div className="pt-24">
          {/* main part of dashboard */}
          <DashboardProfile />
          <Contact />
          <Footer />
        </div>
      </div>
    </AuthorizeUser>
  );
};

export default Hello;
