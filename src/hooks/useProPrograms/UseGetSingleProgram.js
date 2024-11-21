import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetSingleProgramsDataById = ({ id }) => {
  const { data: program = [], refetch } = useQuery({
    queryKey: ["program"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/admin/proprogram/${id}`);
      return res?.data;
    },
  });

  return [program, refetch];
};

export default useGetSingleProgramsDataById;
