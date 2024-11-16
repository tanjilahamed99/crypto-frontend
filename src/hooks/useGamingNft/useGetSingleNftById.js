import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetSingleGamingNftById = ({ id }) => {
  const { data: gamingNft = [], refetch } = useQuery({
    queryKey: ["gamingNft"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/admin/gamingNft/${id}`);
      return res?.data?.gamingNft;
    },
  });

  return [gamingNft, refetch];
};

export default useGetSingleGamingNftById;
