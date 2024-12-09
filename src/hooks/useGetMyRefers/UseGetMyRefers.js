import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetMyRefersData = ({ id }) => {
  const { data: myRefers = [], refetch } = useQuery({
    queryKey: ["myRefers"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/myRefers/${id}`);
      return res.data;
    },
  });

  return [myRefers, refetch];
};

export default useGetMyRefersData;
