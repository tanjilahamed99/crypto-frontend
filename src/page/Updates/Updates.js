"use client";

import useGetAllUpdates from "@/hooks/useGetAllUpdates/useGetAllUpdates";
import Image from "next/image";

const Updates = () => {
  const [allUpdates, refetch] = useGetAllUpdates();

  return (
    <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto">
      <h2 className="text-white text-2xl font-bold">Updates</h2>
      <div className="space-y-3 mt-5">
        {allUpdates?.updates?.map((item, idx) => (
          <div key={idx} className="border border-gray-600 p-3 rounded-md">
            {item?.image && (
              <Image
                src={item?.image}
                alt="image not found"
                height={200}
                width={200}
              />
            )}

            <h2 className="text-xl font-bold text-white">{item?.title}</h2>
            <h2 className="text-white">{item?.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
