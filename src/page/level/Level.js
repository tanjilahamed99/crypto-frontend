"use client";
import useGetMyRefersData from "@/hooks/useGetMyRefers/UseGetMyRefers";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Level = () => {
  const { data: user } = useSession();
  const [myRefers] = useGetMyRefersData({ id: user?.user?._id });
  const [defaultUsers, setDefaultUsers] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null); // Track selected level

  // Get filtered data based on selected level
  const getFilteredData = () => {
    const startIndex = selectedLevel ? (selectedLevel - 1) * 10 : 0;
    const endIndex = selectedLevel ? selectedLevel * 10 : 10;
    return myRefers?.result?.slice(startIndex, endIndex) || [];
  };

  return (
    <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto pl-2 lg:pl-0">
      <h2 className="text-3xl font-bold text-white pl-2 lg:pl-0">Level</h2>

      <div className="overflow-x-auto text-white bg-black mt-4">
        <table className="table border border-gray-700">
          <thead className="text-white border-b-2 border-gray-700">
            <tr>
              <th className="text-white border-r border-gray-700">Level</th>
              <th className="border-r border-gray-700">Member</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="border-t-2 border-gray-700">
            {[1, 2, 3, 4, 5].map((level) => (
              <tr className="border-b border-gray-700" key={level}>
                <th className="border-r border-gray-700">{level}</th>
                <th className="border-r border-gray-700">
                  {myRefers?.result?.length <= level * 10 &&
                  myRefers?.result?.length > (level - 1) * 10
                    ? myRefers?.result?.length - (level - 1) * 10
                    : 0}
                </th>
                <th>
                  <button
                    onClick={() => {
                      setSelectedLevel(level);
                      document.getElementById("my_modal_1").showModal();
                    }}
                    className="btn btn-sm border-none bg-primary text-black"
                  >
                    Details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box lg:w-1/2 max-w-5xl">
          <div className="modal-action">
            <form method="dialog">
              <button onClick={() => setSelectedLevel(null)}>
                <RxCross1 />
              </button>
            </form>
          </div>
          <div className="text-black space-y-3">
            <h2 className="text-xl font-bold text-white">Level {selectedLevel} Details</h2>
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className="text-white">
                      <th className="whitespace-nowrap">No.</th>
                      <th className="whitespace-nowrap">User Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getFilteredData().map((item, idx) => (
                      <tr className="text-white mx-auto" key={idx}>
                        <th className="whitespace-nowrap">{idx + 1}</th>
                        <th className="whitespace-nowrap">{item?._id}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Level;
