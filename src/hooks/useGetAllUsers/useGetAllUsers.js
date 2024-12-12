import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllUsers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios(
        `${BASE_URL}/admin/allUsers`
      );
      return res.data?.users;
    },
  });

  return [allUsers, refetch];
};

export default useGetAllUsers;
