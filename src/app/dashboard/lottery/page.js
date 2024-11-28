
import DashboardLottery from "@/page/DashBoard/Lottery/DashboardLottery";
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
