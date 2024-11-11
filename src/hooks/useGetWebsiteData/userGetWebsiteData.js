import { BASE_URL } from "@/constant/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetWebsiteData = () => {
  const { data: websiteData = {}, refetch } = useQuery({
    queryKey: ["website"],
    queryFn: async () => {
      const res = await axios(`${BASE_URL}/admin/websiteData`);
      return res?.data?.websiteData;
    },
  });

  return [websiteData, refetch];
};

export default useGetWebsiteData;
