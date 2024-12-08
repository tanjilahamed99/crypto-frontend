import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllUpdates = () => {
  const { data: allUpdates = [], refetch } = useQuery({
    queryKey: ["updates"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/allUpdates`);
      return res.data;
    },
  });

  return [allUpdates, refetch];
};

export default useGetAllUpdates;
