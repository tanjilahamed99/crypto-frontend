import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllMyCartData = ({ userId, wallet }) => {
  const { data: myCartData = [], refetch } = useQuery({
    queryKey: ["myCartData"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/myCartData/${userId}/${wallet}`);
      return res?.data;
    },
  });

  return [myCartData, refetch];
};

export default useGetAllMyCartData;
