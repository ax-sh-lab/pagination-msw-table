import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { PropsWithChildren, useState } from "react";

export function TestQueryClientWrapper({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        // logger: {
        //   log: console.log,
        //   warn: console.warn,
        //   // ✅ no more errors on the console for tests
        //   error: process.env.NODE_ENV === "test" ? () => {} : console.error,
        // },
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
      }),
  );

  return (
    <MemoryRouterProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouterProvider>
  );
}
