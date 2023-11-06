import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { Inter } from 'next/font/google';

import { API_ROUTE, fetchProfile } from '@/lib/api-client';
import { JSONViewer } from '@/ui/JSONViewer';
import Loader from '@/ui/loader';
import { UsersTable } from '@/ui/users-table';

const inter = Inter({ subsets: ['latin'] });

function useProfileQuery() {
  return useQuery({ queryFn: fetchProfile, queryKey: [API_ROUTE.PROFILE] });
}

export default function Home() {
  const { data, isLoading, isError, error } = useProfileQuery();

  if (isLoading) return <Loader />;
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <main className={clsx(`min-h-screen`, 'container mx-auto', inter.className)}>
      <JSONViewer data={data} />
      <UsersTable />
    </main>
  );
}
