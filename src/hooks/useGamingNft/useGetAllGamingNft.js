import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetAllGamingNft = () => {
  const {
    data: gamingNft = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["gamingNft"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/admin/gamingNft`);
      return res?.data?.gamingNft;
    },
  });

  return [gamingNft, refetch, isLoading];
};

export default useGetAllGamingNft;
