import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function ReactQueryProvider({
  children,
}: PropsWithChildren<object>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
