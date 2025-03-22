import { render, screen } from "@testing-library/react";
import UserAccount from "../../components/UserAccount";
import { User } from "../../entities";
describe("UserAccount", () => {
  it("should render User Profile with the name when user is provided", () => {
    const user: User = { id: 1, name: "John", isAdmin: true };

    render(<UserAccount user={user} />);
    screen.debug();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/User Profile/i);
  });

  it("should render button `Edit` when user has isAdmin true", () => {
    const user: User = { id: 1, name: "John", isAdmin: true };

    render(<UserAccount user={user} />);
    screen.debug();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Edit");
  });

  it("should not render button `Edit` when user has isAdmin false", () => {
    const user: User = { id: 1, name: "John", isAdmin: false };

    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });

  it("should render user name", () => {
    const user: User = { id: 1, name: "John" };

    render(<UserAccount user={user} />);

    const name = screen.getByText(user.name);
    expect(name).toBeInTheDocument();
  });
});
