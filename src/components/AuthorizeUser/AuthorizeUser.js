"use client";

import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from "next-auth/react";

const AuthorizeUser = ({ children }) => {
  const { data: user, status } = useSession();
  const address = useAddress();
  const router = useRouter();
  if (status === "loading") {
    return (
      <span className="loading loading-spinner  loading-lg text-white bg-white h-[100vh] mx-auto flex justify-center"></span>
    );
  }
  
  if (!user) {
    return router.push("/register");
  }

  return <div>{children}</div>;
};

export default AuthorizeUser;
