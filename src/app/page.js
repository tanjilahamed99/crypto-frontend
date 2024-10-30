import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/page/Home/About/About";
import Certified from "@/page/Home/Certified/Certified";
import RoyaltyTag from "@/page/Home/RoyaltyTag/RoyaltyTag";
import Testimonial from "@/page/Home/Testimonial/Testimonial";
import TopEarners from "@/page/Home/TopEarners/TopEarners";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <Banner />
      <div className="">
        <About />
        <Testimonial />
        <RoyaltyTag />
        <TopEarners />
        <Certified />
        <Footer />
      </div>
    </div>
  );
}
