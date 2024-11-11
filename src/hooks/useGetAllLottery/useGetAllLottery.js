import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllLottery = () => {
  const { data: allLottery = [], refetch } = useQuery({
    queryKey: ["lottery"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/admin/lottery`);
      return res.data;
    },
  });

  return [allLottery, refetch];
};

export default useGetAllLottery;
