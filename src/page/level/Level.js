const Level = () => {
  return (
    <div className="w-full lg:w-[1000px] xl:w-[1350px] mx-auto pl-2 lg:pl-0">
      <h2 className="text-3xl font-bold text-white pl-2 lg:pl-0">Level</h2>

      <div className="overflow-x-auto text-white bg-black mt-4">
        <table className="table border border-gray-700">
          {/* head */}
          <thead className="text-white border-b-2 border-gray-700">
            <tr>
              <th className="text-white border-r border-gray-700">Level</th>
              <th className="border-r border-gray-700">Member</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="border-t-2 border-gray-700">
            {/* row 1 */}
            <tr className="border-b border-gray-700">
              <th className="border-r border-gray-700">1</th>
              <th className="border-r border-gray-700">0</th>
              <th>
                <button className="btn btn-sm border-none bg-primary">
                  Details
                </button>
              </th>
            </tr>
            <tr className="border-b border-gray-700">
              <th className="border-r border-gray-700">2</th>
              <th className="border-r border-gray-700">0</th>
              <th>
                <button className="btn btn-sm border-none bg-primary">
                  Details
                </button>
              </th>
            </tr>
            <tr className="border-b border-gray-700">
              <th className="border-r border-gray-700">3</th>
              <th className="border-r border-gray-700">0</th>
              <th>
                <button className="btn btn-sm border-none bg-primary">
                  Details
                </button>
              </th>
            </tr>
            <tr className="border-b border-gray-700">
              <th className="border-r border-gray-700">4</th>
              <th className="border-r border-gray-700">0</th>
              <th>
                <button className="btn btn-sm border-none bg-primary">
                  Details
                </button>
              </th>
            </tr>
            <tr className="border-b border-gray-700">
              <th className="border-r border-gray-700">5</th>
              <th className="border-r border-gray-700">0</th>
              <th>
                <button className="btn btn-sm border-none bg-primary">
                  Details
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Level;
