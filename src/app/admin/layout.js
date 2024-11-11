import AuthorizedAdmin from "@/components/AuthorizedAdmin/AuthorizedAdmin";
import React from "react";

const layout = ({ children }) => {
  return <AuthorizedAdmin>{children}</AuthorizedAdmin>;
};

export default layout;
