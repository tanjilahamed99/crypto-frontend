import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import ProProgram from "../../../page/ProProgram/ProProgram";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        {/* level ain part */}
        <ProProgram />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
