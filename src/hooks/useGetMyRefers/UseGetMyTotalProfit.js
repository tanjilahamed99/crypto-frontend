import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetMyProfit = ({ id }) => {
  const { data: myProfit = [], refetch } = useQuery({
    queryKey: ["myProfit"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/myProfit/${id}`);
      return res.data;
    },
  });

  return [myProfit, refetch];
};

export default useGetMyProfit;
