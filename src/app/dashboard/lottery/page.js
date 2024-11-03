import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import DashboardLottery from "@/page/DashBoard/Lottery/DashboardLottery";
import Contact from "@/page/Home/Contact/Contact";
import LotteryHistory from "@/page/Lottery/LotteryHistory";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        {/* level ain part */}
        <DashboardLottery disable={true} />
        <LotteryHistory />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
