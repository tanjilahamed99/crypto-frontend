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

const AdminProProgram = () => {
  const { data: user } = useSession();
  const [programs, refetch] = useGetAllProgramsDataByType({
    type: "power-matrix",
    programName: "millionaire",
  });


  const handleAddSlot = async (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const newSlotData = {
      price,
      quantity,
      order:
        programs?.programs?.length > 0
          ? parseFloat(programs?.programs?.length) + 1
          : 1,
      type: "power-matrix",
      programName: "millionaire",
    };

    console.log(newSlotData);

    try {
      const url = `${BASE_URL}/admin/proprogram/${user?.user?._id}/${user?.user?.email}/${user?.user?.wallet}`;
      const { data } = await axios.post(url, newSlotData);
      console.log(data);

      if (data?.status) {
        document.getElementById("my_modal_1").close();
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
        form.reset();
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axios.delete(
          `${BASE_URL}/admin/proprogram/${user?.user?._id}/${user?.user?.email}/${user?.user?.wallet}/${id}`
        );
        if (data?.result?.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div>
      <h2 className="text-white text-2xl font-bold my-5">Pro Program</h2>

      <div className="my-10 space-y-3">
        {/* millionaire program */}
        <h2 className="text-white text-xl font-bold">millionaire Program</h2>
        <div className="px-2 border-gray-700 border-2">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-white text-lg font-bold my-5">
              Pro Power Matrix
            </h2>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="bg-primary font-semibold border-none h-8 w-28 text-white hover:bg-[#f2a74b] rounded-lg"
            >
              Add Slot
            </button>
          </div>

          <div className="flex flex-wrap  gap-10 p-5">
            {programs?.programs?.map((item, idx) => (
              <div
                className="p-4 text-white border border-gray-500 shadow-md w-[200px] shadow-gray-300"
                key={idx}
              >
                <div className="flex flex-col gap-5 justify-center">
                  <div className="w-10 h-10 mx-auto flex justify-center items-center rounded-full text-white ring-2 font-bold ring-white">
                    <p>{item?.order}</p>
                  </div>
                  <p className="flex items-center gap-2 font-semibold">
                    <LuCircleDollarSign className="text-primary text-2xl" />
                    {item?.price}
                  </p>
                  <p className="font-semibold">Quantity : {item?.quantity}</p>
                  <p className="flex items-center gap-2 ">
                    <FaUser className="text-primary text-xl" />
                    {item?.users ? item?.users : 0}
                  </p>

                  <div className="flex justify-between text-2xl">
                    <Link
                      href={`/admin/dashboard/proProgram/editProgram?id=${item?._id}`}
                    >
                      <FaEdit className="text-primary cursor-pointer" />
                    </Link>
                    <MdDeleteSweep
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(item?._id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-gray-600 text-white pt-0">
              <div className="modal-action">
                <form method="dialog">
                  <button>
                    <RxCross1 />
                  </button>
                </form>
              </div>
              <form onSubmit={handleAddSlot} className="text-black space-y-3">
                <div>
                  <h2 className="text-white font-semibold  mb-1">Price</h2>
                  <input
                    type="number"
                    name="price"
                    placeholder="Ex: Price"
                    required
                    className="w-full pl-2 py-2 rounded-md"
                  />
                </div>
                <div>
                  <h2 className="text-white font-semibold  mb-1">Quantity</h2>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Ex: quantity"
                    required
                    className="w-full pl-2 py-2 rounded-md"
                  />
                </div>

                <button className="bg-primary font-semibold border-none h-10 w-28 text-white hover:bg-[#f2a74b] rounded-lg">
                  Create
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default AdminProProgram;