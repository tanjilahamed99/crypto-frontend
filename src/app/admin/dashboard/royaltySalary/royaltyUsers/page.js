"use client";

import useGetSingleProgramsDataById from "@/hooks/useProPrograms/UseGetSingleProgram";
import SendRoyaltyPayment from "./SendRoyaltyPayment";
import { useState } from "react";

const RoyaltyUsers = ({ searchParams }) => {
  const id = searchParams?.id;
  const [program, refetch] = useGetSingleProgramsDataById({ id: id });

  return (
    <div>
      {" "}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th className="whitespace-nowrap">UserId</th>
              <th className="whitespace-nowrap">Wallet</th>
              <th className="whitespace-nowrap">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {program?.program?.users?.map((item, idx) => (
              <tr className="text-white mx-auto" key={idx}>
                <th className="whitespace-nowrap">{item?.userId}</th>
                <th className="whitespace-nowrap">{item?.wallet}</th>

                {item?.status === "Completed" ? (
                  <th className="whitespace-nowrap">
                    <button className="font-semibold bg-green-500 px-5 py-2 rounded-md">
                      Completed
                    </button>
                  </th>
                ) : (
                  <th className="whitespace-nowrap">
                    <SendRoyaltyPayment
                      isEthPayment={true}
                      refetchAll={refetch}
                      mainData={program?.program}
                      id={id}
                      userId={item?.userId}
                      wallet={item?.wallet}
                    />
                  </th>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoyaltyUsers;
