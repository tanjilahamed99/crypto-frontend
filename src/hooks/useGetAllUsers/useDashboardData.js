import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetDashboardData = ({ adminId, adminEmail, wallet }) => {
  const { data:dashboardData = [], refetch } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const res = await axios(
        `${BASE_URL}/admin/dashboardData/${adminId}/${adminEmail}/${wallet}`
      );
      return res.data;
    },
  });

  return [dashboardData, refetch];
};

export default useGetDashboardData;
