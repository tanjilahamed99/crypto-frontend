import { BsPeopleFill } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";

const Banner = () => {
  return (
    <div className="w-[70%] mx-auto">
      <button>Register</button>
      {/* analytics */}
      <div className="bg-gray-400 h-[250px] px-5 flex w-full justify-center items-center bg-opacity-20 ">
        <div className="w-full">
          <h2 className="text-primary text-3xl text-center font-extrabold mb-10">
            Analytics
          </h2>
          <div className="grid items-start text-center grid-cols-5 gap-5 justify-center">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <BsPeopleFill className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-3xl font-bold">295897</h2>
              </div>
              <h2 className="text-primary font-bold">All Participants</h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-3xl font-bold">725423.42</h2>
              </div>
              <h2 className="text-primary font-bold">
                Royalty Monthly Salary Earning
              </h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-3xl font-bold">0</h2>
              </div>
              <h2 className="text-primary font-bold">Lottery Earning</h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-3xl font-bold">5528290</h2>
              </div>
              <h2 className="text-primary font-bold">Total profit earned</h2>
            </div>
            <div>
              <h2 className="text-green-500 text-3xl font-bold">
                March 09 2024
              </h2>
              <h2 className="text-primary font-bold">Creation Date</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
