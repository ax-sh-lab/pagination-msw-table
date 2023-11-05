import { env } from "../../env";

// TODO add type safety on path
export function mockAPIBaseJoinPath(path: string) {
  console.log(env.NEXT_PUBLIC_API_URL, 232);
  return new URL(path, env.NEXT_PUBLIC_API_URL).toString();
}

export async function initMocks() {
  console.log("init mocks");
  if (typeof window !== "undefined") {
    const { worker } = await import("./browser");
    // example
    // function onUnhandledRequest(request, print) {
    //   // Ignore any requests containing "cdn.com" in their URL.
    //   if (request.url.includes("cdn.com")) {
    //     return;
    //   }
    //
    //   // Otherwise, print an unhandled request warning.
    //   print.warning();
    // }
    // return await worker.start({
    //   onUnhandledRequest: "bypass",
    // });
    // https://mswjs.io/docs/api/setup-worker/start#custom-onunhandledrequest-function
    return await worker.start();
  }
  // const { server } = await import('./server')
  // server.listen()
}
