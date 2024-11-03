import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import GamingNft from "@/page/GamingNft/GamingNft";
import Contact from "@/page/Home/Contact/Contact";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        {/* level ain part */}
        <GamingNft />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
