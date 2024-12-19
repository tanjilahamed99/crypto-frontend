"use client";

import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { FaCopy } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";
import useGetAllMyCartData from "@/hooks/userMyCard/useMyCartData";
import axios from "axios";
import { BASE_URL } from "@/constant/constant";
import Swal from "sweetalert2";
import { RxCross1 } from "react-icons/rx";

const Profile = () => {
  const { data: user } = useSession();
  const router = useRouter();
  const [myCartData, refetch] = useGetAllMyCartData({
    userId: user?.user?._id,
    wallet: user?.user?.wallet,
  });

  const uploadProfile = async (e) => {
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
      console.log("hello");
      // Get the image URL from the response
      const imageUrl = response.data.data.url;
      // Save the image URL to state or use it as needed
      console.log(imageUrl);
      if (imageUrl) {
        // update the userData
        const updateImage = {
          picture: imageUrl,
        };
        const { data } = await axios.put(
          `${BASE_URL}/updateUserInfo/${user?.user?._id}/${user?.user?.wallet}`,
          updateImage
        );
        console.log();

        if (data?.result?.matchedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "You Picture updated",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleUpdateUserName = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    try {
      const updateImage = {
        username,
      };
      const { data } = await axios.put(
        `${BASE_URL}/updateUserInfo/${user?.user?._id}/${user?.user?.wallet}`,
        updateImage
      );
      console.log(data);
      if (data?.result?.matchedCount > 0) {
        document.getElementById("my_modal_1").close();
        Swal.fire({
          title: "Good job!",
          text: "You UserName Updated",
          icon: "success",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="lg:w-[70%] w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0  justify-around items-center">
        <div className="">
          <Image
            src={
              user?.user?.picture
                ? user?.user?.picture
                : "https://i.ibb.co.com/9bQnXmF/images-3.jpg"
            }
            width={500}
            height={500}
            alt="image not found"
            className="h-60 w-60 rounded-full mx-auto"
          />
          <div className="mt-3">
            <div>
              <label htmlFor="type3-2" className="">
                <p className="truncate text-center rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-gray-500 px-6 py-1.5 font-medium text-gray-500 shadow-md">
                  {"Edit Profile Pic"}
                </p>
              </label>
              <input
                onChange={uploadProfile}
                className="hidden"
                type="file"
                name=""
                id="type3-2"
              />
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-black  shadow-sm border-primary/30">
          <div className="md:p-6">
            {/* edit items */}
            <div className="flex flex-col gap-4 m-2 text-white w-full ">
              <div className="flex justify-between gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">User Id :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?._id}
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring   hover:bg-gray-600 hover:text-accent-foreground p-2 text-white bg-transparent"
                  onClick={() => {
                    navigator.clipboard.writeText(user?.user?._id);
                  }}
                >
                  <FaCopy className="text-xl" />
                </button>
              </div>
              <div className="flex justify-between gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Wallet :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?.wallet.slice(0, 20)}
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring   hover:bg-gray-600 hover:text-accent-foreground p-2 text-white bg-transparent"
                  onClick={() => {
                    navigator.clipboard.writeText(user?.user?.wallet);
                  }}
                >
                  <FaCopy className="text-xl" />
                </button>
              </div>
              <div className="flex justify-between gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Raf By :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?.referBy}
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring   hover:bg-gray-600 hover:text-accent-foreground p-2 text-white bg-transparent"
                  onClick={() => {
                    navigator.clipboard.writeText(user?.user?.referBy);
                  }}
                >
                  <FaCopy className="text-xl" />
                </button>
              </div>
              <div className="flex justify-between gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Username :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?.username}
                />
                <button
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring   hover:bg-gray-600 hover:text-accent-foreground p-2 text-white bg-transparent"
                >
                  <FiEdit className="text-xl text-primary" />
                </button>
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Joined on :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={user?.user?.joined}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Power Matrix Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={myCartData?.result?.proProgram?.length || 0}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">Power Global Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"0"}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">X-Power Matrix Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"Coming Soon"}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">X-Power Global Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"Coming Soon"}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">2X-Power Matrix Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"Coming Soon"}
                />
              </div>
              <div className="flex  gap-2 md:gap-3 items-center w-full border-b border-primary/30 shadow-sm p-1 md:p-0">
                <h2 className="w-fit font-semibold">2X-Power Global Slot :</h2>
                <input
                  className="flex h-10 rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-none  bg-transparent text-white"
                  disabled
                  value={"Coming Soon"}
                />
              </div>
            </div>
          </div>
        </div>
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
          <form
            onSubmit={handleUpdateUserName}
            className="text-black space-y-3"
          >
            <div>
              <h2 className="text-white font-semibold  mb-1">UserName</h2>
              <input
                type="text"
                name="username"
                placeholder="Ex: username"
                required
                className="w-full pl-2 py-2 rounded-md"
              />
            </div>
            <button className="bg-primary font-semibold border-none h-10 w-28 text-white hover:bg-[#f2a74b] rounded-lg">
              Update
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
