import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";
import TEST_TODOS from "./_testCommon";

// FIXME: we also need to import update and remove things and mock them

describe("TodoForm component", function () {
  it("renders without crashing", function () {
    render(<TodoForm initialTodos={TEST_TODOS} handleSave=/>);
  });

  it("contains expected main section with className", function () {
    const { container, debug } = render(<TodoApp initialTodos={TEST_TODOS}/>);
    const main = container.querySelector("main");
    debug(main);
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoApp initialTodos={TEST_TODOS}/>);
    expect(container).toMatchSnapshot();
  });

  it("can add a new item", function () {
    const { getByLabelText, queryByText } = render(<ShoppingList />);

    // no items yet
    expect(queryByText("ice cream: 100")).not.toBeInTheDocument();

    const nameInput = getByLabelText("Name:");
    const qtyInput = getByLabelText("Qty:");
    const submitBtn = queryByText("Add a new item!");

    // fill out the form
    fireEvent.change(nameInput, { target: { value: "ice cream" } });
    fireEvent.change(qtyInput, { target: { value: 100 } });
    fireEvent.click(submitBtn);

    // item exists!
    expect(queryByText("ice cream: 100")).toBeInTheDocument();
  });
});





