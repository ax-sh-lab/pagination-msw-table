import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function TestQueryClientWrapper({ children }: PropsWithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // ✅ turns retries off
        //   https://tkdodo.eu/blog/testing-react-query
        // It's one of the most common "gotchas" with React Query and testing:
        // The library defaults to three retries with exponential back-off,
        // which means that your tests are likely to timeout if you want to test an erroneous query.
        // The easiest way to turn retries off is, again, via the QueryClientProvider.

        retry: false,
      },
    },
  });
  {
    /*</MemoryRouterProvider>*/
  }
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
