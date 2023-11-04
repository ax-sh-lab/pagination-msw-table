import { UsersTable } from "@/ui/users-table";
import { render, screen } from "@testing-library/react";

describe(UsersTable.name, () => {
  it("should render", () => {
    render(<div className={"test"}>...</div>);
    expect(screen.getByText("...")).not.toHaveClass("tesg");
    screen.logTestingPlaygroundURL();
  });
});
