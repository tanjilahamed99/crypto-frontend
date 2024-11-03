import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import Level from "@/page/level/Level";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        {/* level ain part */}
        <Level />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
