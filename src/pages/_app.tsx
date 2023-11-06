import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { type PropsWithChildren } from 'react';

import { env } from '../../env';

// NOTE enable msw mocking
// TODO find a better way to initialize mocking
if (env.NEXT_PUBLIC_API_MOCKING && typeof window !== 'undefined') {
  require('../mocks').initMocks();
}

// Create a client
const queryClient = new QueryClient();
function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
