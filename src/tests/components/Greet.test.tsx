import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="John" />);
    screen.debug();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/John/i);
  });

  it("should render button name `Login` when name is not provided", () => {
    render(<Greet />);
    screen.debug();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Login");
  });
});
