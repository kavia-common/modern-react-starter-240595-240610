import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio navigation", () => {
  render(<App />);
  expect(screen.getByText(/Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});
