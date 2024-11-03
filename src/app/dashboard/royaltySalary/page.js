import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import RoyaltySalaryForm from "@/page/RoyaltySalary/RoyaltySalaryForm";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 ">
        {/* level ain part */}
        <RoyaltySalaryForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
