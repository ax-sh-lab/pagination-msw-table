import { Inter } from "next/font/google";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { API_ROUTE, fetchProfile } from "@/api";
const inter = Inter({ subsets: ["latin"] });

function useProfileQuery() {
  return useQuery({ queryFn: fetchProfile, queryKey: [API_ROUTE.PROFILE] });
}

export default function Home() {
  const { data, isLoading, isError, error } = useProfileQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <main
      className={clsx(
        `flex min-h-screen flex-col items-center justify-between p-24`,
        inter.className,
      )}
    >
      <pre>{data}</pre>
    </main>
  );
}
