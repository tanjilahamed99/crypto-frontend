"use client";

import useGetAllUpdates from "@/hooks/useGetAllUpdates/useGetAllUpdates";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const AdminAllUpdates = () => {
  const [allUpdates, refetch] = useGetAllUpdates();
  const [lotteryImg, setLotteryImg] = useState("");

  const handleCreateUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const desc = form.desc.value;

    const updatesData = {
      title,
      image: lotteryImg,
      description: desc,
    };

    const url = `${BASE_URL}/admin/updates/${user?.user?._id}/${user?.user?.email}/${user?.user?.wallet}`;

    const { data } = await axios.post(url, updatesData);

    console.log(data);

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
        <h2 className="text-white text-2xl font-bold my-5">All Updates</h2>
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="bg-primary font-semibold border-none h-8 w-28 text-white hover:bg-[#f2a74b] rounded-lg"
        >
          Add Updates
        </button>
      </div>

      {/* create updates */}

      {/* create lottery */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gray-600 text-white pt-0">
          <div className="modal-action">
            <form method="dialog">
              <button>
                <RxCross1 />
              </button>
            </form>
          </div>
          <form onSubmit={handleCreateUpdate} className="text-white space-y-3 ">
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
              <h2 className="text-white font-semibold  mb-1">Description</h2>
              <textarea
                className="textarea textarea-bordered w-full text-white"
                placeholder="Bio"
                name="desc"
              ></textarea>
            </div>
            <div>
              <h2 className="text-white font-semibold  mb-1">Image Link</h2>
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <input
                  name="image"
                  type="text"
                  placeholder="Ex: http.."
                  className="w-full pl-2 py-2  rounded-md"
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

      {allUpdates?.updates?.map((item, idx) => (
        <div key={idx}>
          <h2>{item?.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default AdminAllUpdates;
