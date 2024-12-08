"use client";

import useGetAllUpdates from "@/hooks/useGetAllUpdates/useGetAllUpdates";

const Updates = () => {
  const [allUpdates, refetch] = useGetAllUpdates();

  return (
    <div className="lg:w-[80%] w-[90%] mx-auto">
      <h2 className="text-white text-2xl font-bold">Updates</h2>
      <div>
        {allUpdates?.updates?.map((item, idx) => (
          <div key={idx}>
            <h2>{item?.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
