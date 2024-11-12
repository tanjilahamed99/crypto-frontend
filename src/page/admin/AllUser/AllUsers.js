"use client";
import useGetAllUsers from "@/hooks/useGetAllUsers/useGetAllUsers";
import { useSession } from "next-auth/react";

const AllUsers = () => {
  const { data: user } = useSession() || {};
  const [allUsers, refetch] = useGetAllUsers({
    adminId: user?.user?._id,
    adminEmail: user?.user?.email,
    wallet: user?.user?.wallet,
  });

  return (
    <div>
      <h2 className="text-white text-2xl font-bold my-5">
        All Users Information
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th className="whitespace-nowrap">Name</th>
              <th className="whitespace-nowrap">email</th>
              <th className="whitespace-nowrap">Wallet</th>
              <th className="whitespace-nowrap">Role</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((item, idx) => (
              <tr className="text-white mx-auto" key={idx}>
                <th className="whitespace-nowrap">{item?.username}</th>
                <th className="whitespace-nowrap">{item?.email}</th>
                <th className="whitespace-nowrap">
                  {item?.wallet?.slice(0, 7)}...{item?.wallet.slice(12, 20)}
                </th>
                <th className="whitespace-nowrap">{item?.role}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
