import { render, screen } from "@testing-library/react";
import Header from "../Header";

//this is unit test
//getByText
it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
/*

//getByRole
it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  expect(headingElement).toBeInTheDocument();
});

//getByTestId
it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

//Find By
it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

//QueryBy
//if the scree doesn't have "dogs" texts, then it passes because of "not"
it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

//getAllByRole
it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});

*/
