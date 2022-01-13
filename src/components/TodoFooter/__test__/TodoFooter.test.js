import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

//Unit testing
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  //testing functionality 1
  describe("Functionality 1", () => {
    it("should render the correct amount of incomplete tasks", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  //testing functionality 2
  describe("Functionality 2", () => {
    it("should render 'task' when the num of incomplete is one", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  });
  //testing functionality 3
  describe("Functionality 3", () => {
    it("should render the correct amount of incomplete tasks and visible", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      //assertions are the ones that come after "." like,, toBeInTheDocument
      expect(paragraphElement).toBeVisible();
    });
  });
  //testing functionality 4
  describe("Functionality 4", () => {
    it("contain 'p' tag?", async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />);
      const paragraphElement = screen.getByText(/5 tasks left/i);
      //assertions are the ones that come after "." like,, toBeInTheDocument
      expect(paragraphElement).toContainHTML("p");
    });
  });
  /**
   * and so on...
   *
   *
   */
  it("does the p tag contain paragraph of '1 task left?'", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");
    //assertions are the ones that come after "." like,, toBeInTheDocument
    expect(paragraphElement).toHaveTextContent("1 task left");
  });

  it("the value of the paragraph to be '1 task left?'", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");
    //assertions are the ones that come after "." like,, toBeInTheDocument
    expect(paragraphElement.textContent).toBe("1 task left");
  });
});
