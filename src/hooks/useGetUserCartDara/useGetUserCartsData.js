import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetUserCartData = ({ adminId, adminEmail, wallet, id }) => {
  const { data: userCartsData = [], refetch } = useQuery({
    queryKey: ["userCarts"],
    queryFn: async () => {
      const res = await axios(
        `${BASE_URL}/admin/userCarts/${adminId}/${adminEmail}/${wallet}/${id}`
      );
      return res.data;
    },
  });

  return [userCartsData, refetch];
};

export default useGetUserCartData;
