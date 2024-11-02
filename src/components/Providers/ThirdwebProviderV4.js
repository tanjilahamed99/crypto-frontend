"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
export default function ThirdwebProviderV4({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient} >
      <ThirdwebProvider clientId={'5dc988fd366e2695d7f1b447b3db7c86'} secretKey={process.env.SECRET_KEY}>{children}</ThirdwebProvider>
    </QueryClientProvider>
  );
}
