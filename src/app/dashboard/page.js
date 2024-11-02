import AuthorizeUser from "@/components/AuthorizeUser/AuthorizeUser";
import React from "react";

const Hello = () => {
  return (
    <AuthorizeUser>
      <div></div>
    </AuthorizeUser>
  );
};

export default Hello;
