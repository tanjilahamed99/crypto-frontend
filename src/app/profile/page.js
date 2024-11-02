import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/page/Home/Contact/Contact";
import Profile from "@/page/Profile/Profile";

const page = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="pt-24">
        {/* profile main component */}
        <Profile />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default page;
