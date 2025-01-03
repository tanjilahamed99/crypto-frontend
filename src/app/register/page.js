import AuthorizeUser from "@/components/AuthorizeUser/AuthorizeUser";
import Command from "@/page/Register/Command/Command";
import Halp from "@/page/Register/Halp/Halp";
import RegisterForm from "@/page/Register/RegisterForm/RegisterForm";
import React from "react";

const page = ({ searchParams }) => {
  const refer = searchParams?.unLine;
  return (
    <div className="bg-black w-[95%] mx-auto pt-10 space-y-10">
      <RegisterForm refer={refer} />
      <Command />
      <Halp />
    </div>
  );
};

export default page;
