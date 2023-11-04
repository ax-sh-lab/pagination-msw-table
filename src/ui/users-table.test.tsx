import { UsersTable } from "@/ui/users-table";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { setupServer } from "msw/node";

import { usersListMockHandler } from "@/mocks/handlers/users-list-mock-handler";
import { TestQueryClientWrapper } from "@/ui/test-query-client.wrapper";
import { http, HttpResponse } from "msw";
import { mockAPIBaseJoinPath } from "@/mocks";
import { API_ROUTE } from "@/api";

const server = setupServer(usersListMockHandler);
describe(UsersTable.name, () => {
  // Enable request interception.
  beforeAll(() => server.listen());
  // beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));

  // Reset handlers so that each test could alter them
  // without affecting other, unrelated tests.
  afterEach(() => server.resetHandlers());

  // Don't forget to clean up after-wards.
  afterAll(() => server.close());

  it("show loading", () => {
    render(<UsersTable />, { wrapper: TestQueryClientWrapper });
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  it("show error", async () => {
    render(<UsersTable />, { wrapper: TestQueryClientWrapper });
    const error = await screen.findByText(/Loading.../);
    expect(error).toBeInTheDocument();
  });

  it("should render", () => {
    render(<div className={"test"}>...</div>);
    expect(screen.getByText("...")).not.toHaveClass("tesg");
    screen.logTestingPlaygroundURL();
  });
});

describe("api component testing", () => {
  // beforeAll(() => server.listen());
  beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it("show successful result", async () => {
    // server.use(usersListMockHandler);
    // server.use(
    //   http.post(mockAPIBaseJoinPath(API_ROUTE.USERS), () => {
    //     console.log(999999999);
    //     return HttpResponse.json({ k: 9 });
    //   }),
    // );

    render(<UsersTable />, { wrapper: TestQueryClientWrapper });

    // await waitFor(() => expect(component).toBeInTheDocument());
  });

  it("show successful result", async () => {
    render(<UsersTable />, { wrapper: TestQueryClientWrapper });

    await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../));

    const testID = /UsersTable/;
    const successComponent = screen.getByTestId(testID);
    expect(successComponent).toBeVisible();
  });
});
