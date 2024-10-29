import { BsPeopleFill } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";

const Banner = () => {
  return (
    <div className="lg:w-[70%] w-[90%] mx-auto">
      <button>Register</button>
      {/* analytics */}
      <div className="bg-gray-400 xl:h-[250px] py-10 xl:py-0 px-5 flex w-full justify-center items-center bg-opacity-20 ">
        <div className="w-full">
          <h2 className="text-primary text-2xl md:text-3xl text-center font-extrabold mb-5 md:mb-10">
            Analytics
          </h2>
          <div className="grid items-start text-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-5 justify-center">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <BsPeopleFill className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">295897</h2>
              </div>
              <h2 className="text-primary font-bold">All Participants</h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">725423.42</h2>
              </div>
              <h2 className="text-primary font-bold">
                Royalty Monthly Salary Earning
              </h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">0</h2>
              </div>
              <h2 className="text-primary font-bold">Lottery Earning</h2>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <LuCircleDollarSign className="text-green-500 text-2xl" />
                <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">5528290</h2>
              </div>
              <h2 className="text-primary font-bold">Total profit earned</h2>
            </div>
            <div>
              <h2 className="text-green-500 text-2xl lg:text-3xl font-bold">
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
