import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Todo List Component", () => {
  test("renders initial todos", () => {
    render(<App />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Practice Routing")).toBeInTheDocument();
  });
});
