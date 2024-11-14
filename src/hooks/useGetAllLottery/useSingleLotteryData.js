import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSingleLotteryDataById = ({ id }) => {
  const { data: lottery = [], refetch } = useQuery({
    queryKey: ["lottery"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/admin/lottery/${id}`);
      return res?.data?.lottery;
    },
  });

  return [lottery, refetch];
};

export default useSingleLotteryDataById;
