"use client";

import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from "next-auth/react";
import Navbar from "../Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import Footer from "../Footer/Footer";

const AuthorizeUser = ({ children }) => {
  const { data: user, status } = useSession();
  const address = useAddress();
  const router = useRouter();
  if (status === "loading") {
    return (
      <span className="loading loading-spinner  loading-lg text-white bg-white h-[100vh] mx-auto flex justify-center"></span>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="pt-20 lg:pt-24">{children}</div>
      <Contact />
      <Footer />
    </div>
  );
};

export default AuthorizeUser;
