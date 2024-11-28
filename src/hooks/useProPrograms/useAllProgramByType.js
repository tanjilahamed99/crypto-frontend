import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllProProgramByType = ({ type }) => {
  const { data: programsByTpe = [], refetch } = useQuery({
    queryKey: ["programsByTpe"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/proProgram/${type}`);
      console.log(programsByTpe);
      return res?.data;
    },
  });

  return [programsByTpe, refetch];
};

export default useGetAllProProgramByType;
