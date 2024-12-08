"use client";

import useGetAllUpdates from "@/hooks/useGetAllUpdates/useGetAllUpdates";

const Updates = () => {
  const [allUpdates, refetch] = useGetAllUpdates();

  return (
    <div>
      {allUpdates?.updates?.map((item, idx) => (
        <div key={idx}>
          <h2>{item?.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Updates;
