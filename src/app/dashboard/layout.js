import AuthorizeUser from "@/components/AuthorizeUser/AuthorizeUser";
import React from "react";

const layout = ({ children }) => {
  return <AuthorizeUser>{children}</AuthorizeUser>;
};

export default layout;
