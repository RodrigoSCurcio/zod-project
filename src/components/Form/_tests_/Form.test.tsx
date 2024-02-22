import { render, screen } from "@testing-library/react";
import Form from "../Form";

describe("should render the form without errors", () => {
  //   it("should render fields", () => {
  //     const { getByLabelText } = render(<Form />);

  //     // eslint-disable-next-line testing-library/prefer-screen-queries
  //     expect(getByLabelText("Nome")).toBeInTheDocument();
  //   });

  it("should render texts", () => {
    render(<Form />);

    expect(screen.getByText("Registro")).toBeInTheDocument();
  });
});
