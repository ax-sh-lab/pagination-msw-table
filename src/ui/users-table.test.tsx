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

const server = setupServer(usersListMockHandler);
describe(UsersTable.name, () => {
  // Enable request interception.
  beforeAll(() => server.listen());

  // Reset handlers so that each test could alter them
  // without affecting other, unrelated tests.
  afterEach(() => server.resetHandlers());

  // Don't forget to clean up afterwards.
  afterAll(() => server.close());

  it("show loading", () => {
    render(<UsersTable />, { wrapper: TestQueryClientWrapper });
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });

  it("show error", async () => {
    render(<UsersTable />, { wrapper: TestQueryClientWrapper });
    const error = await screen.findByText(/Loading.../);
    expect(error).toBeInTheDocument();
  });

  it("show result", async () => {
    render(<UsersTable />, { wrapper: TestQueryClientWrapper });
    const component = await screen.findByTestId(/UsersTable/);
    await waitForElementToBeRemoved(() => screen.findByText(/Loading.../));
    expect(component).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
    // 🕗 Wait for the posts request to be finished.
    // await waitFor(() => {
    //   expect(screen.getByText(/Loading.../)).not.toBeInTheDocument();
    // });
    // expect(screen.findByText(/Loading.../)).not.toBeInTheDocument();
    // screen.logTestingPlaygroundURL();
  });

  it("should render", () => {
    render(<div className={"test"}>...</div>);
    expect(screen.getByText("...")).not.toHaveClass("tesg");
    screen.logTestingPlaygroundURL();
  });
});
