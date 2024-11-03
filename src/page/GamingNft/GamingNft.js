import Image from "next/image";

const GamingNft = () => {
  return (
    <div className=" bg-background p-2  w-full lg:w-[1000px] xl:w-[1350px] mx-auto">
      <div className="bg-opacity-20 bg-gray-400">
        <div className="rounded-lg  text-card-foreground shadow-sm p-2 bg-transparent w-full">
          <h2 className="font-semibold tracking-tight text-2xl mb-4 text-white">
            Gaming NFTS
          </h2>
          <div className="p-6 pt-0 flex flex-col md:flex-row gap-4 items-center md:items-stretch">
            <div className="rounded-lg text-card-foreground shadow-sm p-2 w-full max-w-sm transform  transition-transform duration-100 hover:scale-105 bg-gray-400 bg-opacity-20 hover:bg-gray-600 py-10">
              <h2 className="font-semibold tracking-tight text-center mb-3 text-lg text-white">
                Millionaire
              </h2>
              <Image
                src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                height={500}
                width={500}
                alt="image not found"
                className="w-20 h-20 mx-auto"
              />
            </div>
            <div className="rounded-lg text-card-foreground shadow-sm p-2 w-full max-w-sm transform  transition-transform duration-100 hover:scale-105 bg-gray-400 bg-opacity-20 hover:bg-gray-600 py-10">
              <h2 className="font-semibold tracking-tight text-center mb-3 text-lg text-white">
              Billionaire
              </h2>
              <Image
                src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                height={500}
                width={500}
                alt="image not found"
                className="w-20 h-20 mx-auto"
              />
               <h2 className="font-light tracking-tight text-center mt-2 text-white">
                Comming Soon
              </h2>
            </div>
            <div className="rounded-lg text-card-foreground shadow-sm p-2 w-full max-w-sm transform  transition-transform duration-100 hover:scale-105 bg-gray-400 bg-opacity-20 hover:bg-gray-600 py-10">
              <h2 className="font-semibold tracking-tight text-center mb-3 text-lg text-white">
              Trillionaire
              </h2>
              <Image
                src={"https://i.ibb.co.com/9bQnXmF/images-3.jpg"}
                height={500}
                width={500}
                alt="image not found"
                className="w-20 h-20 mx-auto"
              />
              <h2 className="font-light tracking-tight text-center mt-2 text-white">
                Comming Soon
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingNft;
