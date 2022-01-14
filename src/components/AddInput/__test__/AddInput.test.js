import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

//triggering event using react testing library
const mockedSetTodo = jest.fn();
//this is unit test
describe("AddInput", () => {
  //renders Add a new task here..by default?
  it("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  //when we type todo, display that todo text
  it("should be able to type in input", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });
  //when we click to add, the todos={[]} should go back to empty
  it("should have empty input when add button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
