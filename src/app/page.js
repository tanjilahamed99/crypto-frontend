import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-black pb-40">
      <Navbar />

      <Banner />
      <div className="w-[100%] lg:w-[1000px] xl:w-[1250px] mx-auto"></div>
    </div>
  );
}
