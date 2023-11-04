import clsx from "clsx";

export default function Loader() {
  return (
    <section
      className={clsx(
        "min-h-screen grid place-content-center text-center",
        "prose prose-amber prose:headers:text-center max-w-none  dark:prose-invert",
      )}
    >
      <h1>Loading...</h1>
    </section>
  );
}
