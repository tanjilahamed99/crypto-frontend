import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/page/Home/About/About";

export default function Home() {
  return (
    <div className="bg-black pb-40">
      <Navbar />

      <Banner />
      <div className="">
        <About />
      </div>
    </div>
  );
}
