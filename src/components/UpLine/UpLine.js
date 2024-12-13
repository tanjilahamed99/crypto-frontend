"use client";

import { BASE_URL } from "@/constant/constant";
import axios from "axios";
import { useEffect, useState } from "react";

const UpLine = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios(`${BASE_URL}/myRefers/${id}`);
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData(); // Call the async function
    }
  }, [id]); // Dependency array includes `id`

  return <div>{data?.result?.length}</div>;
};

export default UpLine;
