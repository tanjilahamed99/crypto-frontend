import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/page/Home/About/About";
import Testimonial from "@/page/Home/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <Banner />
      <div className="">
        <About />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
