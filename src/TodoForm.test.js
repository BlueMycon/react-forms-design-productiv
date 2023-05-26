import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";
import {TEST_TODOS} from "./_testCommon";

const update = jest.fn();
const remove = jest.fn();

describe("TodoForm component", function () {
  it("renders update form without crashing", function () {
    render(<TodoForm initialFormData={TEST_TODOS[0]} handleSave={update}/>);
  });

  it("renders delete form without crashing", function () {
    render(<TodoForm initialFormData={TEST_TODOS[0]} handleSave={remove}/>);
  });

  it("contains expected main section with className", function () {
    const { container, debug } = render(
      <TodoForm initialFormData={TEST_TODOS[0]} handleSave={update}/>
    );
    const form = container.querySelector("form");
    debug(form);
    expect(form).toHaveClass("NewTodoForm");
  });

  it("matches snapshot", function () {
    const { container } = render(
      <TodoForm initialFormData={TEST_TODOS[0]} handleSave={update}/>
    );
    expect(container).toMatchSnapshot();
  });

  it("runs handleSave function when submit button is clicked", function () {
    const { container } = render(
      <TodoForm initialFormData={TEST_TODOS[0]} handleSave={update}/>
    );

    const submitButton = container.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(submitButton);

    expect(update).toHaveBeenCalledTimes(1);
  });
});





