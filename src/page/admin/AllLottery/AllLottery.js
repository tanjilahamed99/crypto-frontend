"use client";

import { BASE_URL } from "@/constant/constant";
import useGetAllLottery from "@/hooks/useGetAllLottery/useGetAllLottery";
import axios from "axios";
import { useSession } from "next-auth/react";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

const AllLottery = () => {
  const { data: user } = useSession() || {};
  const [allLottery, refetch] = useGetAllLottery();
  const [lotteryImg, setLotteryImg] = useState("");

  const handleCreateLottery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const lotteryData = {
      title,
      image,
      price,
      quantity,
    };

    const url = `${BASE_URL}/admin/lottery/${user?.user?._id}/${user?.user?.email}/${user?.user?.wallet}`;

    const { data } = await axios.post(url, lotteryData);

    if (data?.status) {
      document.getElementById("my_modal_1").close();
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
      refetch();
      form.reset();
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
          `${BASE_URL}/admin/lottery/${user?.user?._id}/${user?.user?.email}/${user?.user?.wallet}/${id}`
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

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      // Send the image to ImgBB
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=9fa3cb8e4f8295683436ab614de928c1`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Get the image URL from the response
      const imageUrl = response.data.data.url;
      console.log("Image uploaded successfully:", imageUrl);

      // Save the image URL to state or use it as needed
      setLotteryImg(imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <h2 className="text-white text-2xl font-bold my-5">Lottery</h2>
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="bg-primary font-semibold border-none h-8 w-28 text-white hover:bg-[#f2a74b] rounded-lg"
        >
          Add Lottery
        </button>
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
          <form onSubmit={handleCreateLottery} className="text-black space-y-3">
            <div>
              <h2 className="text-white font-semibold  mb-1">Title</h2>
              <input
                type="text"
                name="title"
                placeholder="Ex: Title"
                required
                className="w-full pl-2 py-2 rounded-md"
              />
            </div>
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
            <div>
              <h2 className="text-white font-semibold  mb-1">Image Link</h2>
              <div className="flex justify-between gap-5">
                <input
                  name="image"
                  type="text"
                  placeholder="Ex: http.."
                  required
                  className="w-full pl-2  rounded-md"
                  defaultValue={lotteryImg}
                />
                <div>
                  <label
                    htmlFor="type3-2"
                    className="flex w-full max-w-[170px]"
                  >
                    <p className="w-max truncate rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-green-500 px-6 py-1.5 font-medium text-green-500 shadow-md">
                      {"CHOOSE FILE"}
                    </p>
                  </label>
                  <input
                    onChange={handleImageUpload}
                    className="hidden"
                    type="file"
                    name=""
                    id="type3-2"
                  />
                </div>
              </div>
            </div>

            <button className="bg-primary font-semibold border-none h-10 w-28 text-white hover:bg-[#f2a74b] rounded-lg">
              Create
            </button>
          </form>
        </div>
      </dialog>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th className="whitespace-nowrap">Image</th>
              <th className="whitespace-nowrap">Title</th>
              <th className="whitespace-nowrap">Price</th>
              <th className="whitespace-nowrap">Quantity</th>
              <th className="whitespace-nowrap">Remaining</th>
              <th className="whitespace-nowrap">Sell</th>
              <th className="whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {allLottery?.lottery?.map((item, idx) => (
              <tr className="text-white mx-auto" key={idx}>
                <th className="whitespace-nowrap">
                  <Image
                    src={item?.image}
                    alt="image not found"
                    height={500}
                    width={500}
                    className="w-10 h-10 rounded-full"
                  />
                </th>
                <th className="whitespace-nowrap">{item?.title}</th>
                <th className="whitespace-nowrap">{item?.price}</th>
                <th className="whitespace-nowrap">{item?.quantity}</th>
                <th className="whitespace-nowrap"></th>
                <th className="whitespace-nowrap"></th>
                <th className="whitespace-nowrap">
                  <MdDeleteForever
                    className=" text-2xl text-red-500 cursor-pointer"
                    onClick={() => handleDelete(item?._id)}
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllLottery;
