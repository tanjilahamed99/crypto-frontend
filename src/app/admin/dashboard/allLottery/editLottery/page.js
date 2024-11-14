"use client";

import { BASE_URL } from "@/constant/constant";
import useSingleLotteryDataById from "@/hooks/useGetAllLottery/useSingleLotteryData";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const EditLottery = ({ searchParams }) => {
  const id = searchParams?.id;
  const { data: user } = useSession();
  const [lottery] = useSingleLotteryDataById({ id });
  const router = useRouter();

  const handleUpdateLottery = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const lotteryData = {
      title,
      image: image,
      price,
      quantity,
      remaining: quantity,
      sell: 0,
    };

    const url = `${BASE_URL}/admin/lottery/${user?.user?._id}/${user?.user?.email}/${user?.user?.wallet}/${id}`;
    const { data } = await axios.put(url, lotteryData);
    console.log(data);
    if (data?.result?.modifiedCount > 0) {
      Swal.fire({
        title: "Good job!",
        text: "Update completed",
        icon: "success",
      });
      router.push("/admin/dashboard/allLottery");
    }
  };

  return (
    <div className="mt-10">
      {" "}
      <form
        onSubmit={handleUpdateLottery}
        className="text-black space-y-5 w-full md:w-[70%] mx-auto lg:w-[60%]"
      >
        <div>
          <h2 className="text-white font-semibold  mb-1">Title</h2>
          <input
            type="text"
            name="title"
            placeholder="Ex: Title"
            required
            className="w-full pl-2 py-2 rounded-md"
            defaultValue={lottery?.title}
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
            defaultValue={lottery?.price}
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
            defaultValue={lottery?.quantity}
          />
        </div>
        <div>
          <h2 className="text-white font-semibold  mb-1">Image Link</h2>
          <div className="">
            <input
              name="image"
              type="text"
              placeholder="Ex: http.."
              required
              className="w-full pl-2 py-2  rounded-md"
              defaultValue={lottery?.image}
            />
          </div>
        </div>

        <button className="bg-primary font-semibold border-none h-10 w-28 text-white hover:bg-[#f2a74b] rounded-lg">
          update
        </button>
      </form>
    </div>
  );
};

export default EditLottery;
