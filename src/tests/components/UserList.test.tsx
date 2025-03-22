import { render, screen } from "@testing-library/react";
import UserList from "../../components/UserList";
import { User } from "../../entities";

describe("UserList", () => {
  it("shouöd not renders a list of users if userlost is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText("No users available.")).toBeInTheDocument();
  });

  it("renders a list of users", () => {
    const users: User[] = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
