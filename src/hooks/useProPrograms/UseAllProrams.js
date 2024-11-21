import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllProgramsDataByType = ({ type, programName }) => {
  const { data: programs = [], refetch } = useQuery({
    queryKey: ["programs"],
    queryFn: async () => {
      const res = await axios(
        `${BASE_URL}/admin/proprogram/${type}/${programName}`
      );
      return res?.data;
    },
  });

  return [programs, refetch];
};

export default useGetAllProgramsDataByType;
