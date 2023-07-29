/* eslint-disable no-unused-vars */
"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
};

export default Providers;
