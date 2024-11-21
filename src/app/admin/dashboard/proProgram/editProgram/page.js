"use client";

import { BASE_URL } from "@/constant/constant";
import useGetSingleProgramsDataById from "@/hooks/useProPrograms/UseGetSingleProgram";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const EditProgram = ({ searchParams }) => {
  const id = searchParams?.id;
  const [program, refetch] = useGetSingleProgramsDataById({ id });
  const { data: user } = useSession();
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const newSlotData = {
      price,
      quantity,
    };

    try {
      const url = `${BASE_URL}/admin/proprogram/${user?.user?._id}/${user?.user?.email}/${user?.user?.wallet}/${id}`;
      const { data } = await axios.put(url, newSlotData);
      if (data?.result?.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: "Update complete",
          icon: "success",
        });
        refetch();
        router.push("/admin/dashboard/proProgram");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleUpdate} className="text-black space-y-3">
        <div>
          <h2 className="text-white font-semibold  mb-1">Price</h2>
          <input
            type="number"
            name="price"
            placeholder="Ex: Price"
            required
            className="w-full pl-2 py-2 rounded-md"
            defaultValue={program?.program?.price}
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
            defaultValue={program?.program?.quantity}
          />
        </div>

        <button className="bg-primary font-semibold border-none h-10 w-28 text-white hover:bg-[#f2a74b] rounded-lg">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProgram;
