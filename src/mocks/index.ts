// TODO add type safety on path
export function mockAPIBaseJoinPath(path: string) {
  return new URL(path, "env.API_URL").toString();
}

async function initMocks() {
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
    // https://mswjs.io/docs/api/setup-worker/start#custom-onunhandledrequest-function
    return await worker.start({
      onUnhandledRequest: "bypass",
    });
  }
  // const { server } = await import('./server')
  // server.listen()
}

void initMocks();
