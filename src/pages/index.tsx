import { Inter } from "next/font/google";
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={clsx(
        `flex min-h-screen flex-col items-center justify-between p-24`,
        inter.className,
      )}
    >
      Hello World
    </main>
  );
}
