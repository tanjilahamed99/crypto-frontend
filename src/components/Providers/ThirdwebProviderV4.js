"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { clientID } from "@/client";
export default function ThirdwebProviderV4({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider clientId={clientID}>{children}</ThirdwebProvider>
    </QueryClientProvider>
  );
}
