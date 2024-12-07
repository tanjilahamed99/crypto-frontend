"use client";

import { BASE_URL } from "@/constant/constant";
import useGetAllProgramsDataByType from "@/hooks/useProPrograms/UseAllProrams";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";

const AdminRoyaltySalary = () => {
  const { data: user } = useSession();
  const [programs, refetch] = useGetAllProgramsDataByType({
    type: "power-matrix",
    programName: "millionaire",
  });

  return (
    <div>
      <h2 className="text-white text-2xl font-bold my-5">Royalty Salary</h2>

      <div className="my-10 space-y-3">
        {/* millionaire program */}
        <h2 className="text-white text-xl font-bold">millionaire Programs</h2>
        <div className="px-2 border-gray-700 border-2">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-white text-lg font-bold my-5">
              Pro Power Matrix
            </h2>
          </div>

          <div className="flex flex-wrap  gap-10 p-5">
            {programs?.programs?.map((item, idx) => (
              <Link
                key={idx}
                href={`/admin/dashboard/royaltySalary/royaltyUsers?id=${item?._id}`}
              >
                <div className="p-4 text-white border border-gray-500 shadow-md w-[200px] shadow-gray-300">
                  <div className="flex flex-col gap-5 justify-center">
                    <div className="w-10 h-10 mx-auto flex justify-center items-center rounded-full text-white ring-2 font-bold ring-white">
                      <p>{item?.order}</p>
                    </div>
                    <p className="flex items-center gap-2 font-semibold">
                      <LuCircleDollarSign className="text-primary text-2xl" />
                      {item?.price}
                    </p>
                    <p className="flex items-center gap-2 ">
                      <FaUser className="text-primary text-xl" />
                      {item?.users?.length > 0 ? item?.users?.length : 0}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoyaltySalary;
