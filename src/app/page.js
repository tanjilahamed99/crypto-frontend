import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/page/Home/About/About";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <Banner />
      <div className="">
        <About />
        <Footer />
      </div>
    </div>
  );
}
