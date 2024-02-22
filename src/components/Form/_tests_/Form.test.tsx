import { render, screen } from "@testing-library/react";
import Form from "../Form";

describe("should render the form without errors", () => {
  it("should render fields", () => {
    render(<Form />);

    screen.getByLabelText("Nome");
  });

  it("should render texts", () => {
    render(<Form />);

    screen.getByText("Registro");
  });
});
