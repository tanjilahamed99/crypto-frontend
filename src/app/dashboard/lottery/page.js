import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import DashboardLottery from "@/page/DashBoard/Lottery/DashboardLottery";
import Contact from "@/page/Home/Contact/Contact";
import LotteryHistory from "@/page/Lottery/LotteryHistory";

const page = () => {
  return (
    <>
      <DashboardLottery disable={true} />
      <LotteryHistory />
    </>
  );
};

export default page;
