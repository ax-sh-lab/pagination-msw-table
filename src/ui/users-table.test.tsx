import { UsersTable } from "@/ui/users-table";
import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";

import { usersListMockHandler } from "@/mocks/handlers/users-list-mock-handler";
import { TestQueryClientWrapper } from "@/ui/test-query-client.wrapper";

const server = setupServer(
  usersListMockHandler,
  //   // Describe network behavior with request handlers.
  //   // Tip: move the handlers into their own module and
  //   // import it across your browser and Node.js setups!
  //   http.get("/posts", ({ request, params, cookies }) => {
  //     return HttpResponse.json([
  //       {
  //         id: "f8dd058f-9006-4174-8d49-e3086bc39c21",
  //         title: `Avoid Nesting When You're Testing`,
  //       },
  //       {
  //         id: "8ac96078-6434-4959-80ed-cc834e7fef61",
  //         title: `How I Built A Modern Website In 2021`,
  //       },
  //     ]);
  //   }),
);
describe(UsersTable.name, () => {
  // Enable request interception.
  beforeAll(() => server.listen());

  // Reset handlers so that each test could alter them
  // without affecting other, unrelated tests.
  afterEach(() => server.resetHandlers());

  // Don't forget to clean up afterwards.
  afterAll(() => server.close());

  it("should render", () => {
    render(<UsersTable />, { wrapper: TestQueryClientWrapper });
    // expect(screen.getByText("...")).not.toHaveClass("tesg");
    screen.logTestingPlaygroundURL();
  });

  it("should render", () => {
    render(<div className={"test"}>...</div>);
    expect(screen.getByText("...")).not.toHaveClass("tesg");
    screen.logTestingPlaygroundURL();
  });
});
