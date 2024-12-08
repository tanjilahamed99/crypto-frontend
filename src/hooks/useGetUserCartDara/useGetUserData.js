import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetUserData = ({ adminId, adminEmail, wallet, id }) => {
  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await axios(
        `${BASE_URL}/admin/userData/${adminId}/${adminEmail}/${wallet}/${id}`
      );
      return res.data;
    },
  });

  return [userData, refetch];
};

export default useGetUserData;
