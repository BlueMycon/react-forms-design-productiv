
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

import * as Test from "./_testCommon";
Test.remove = jest.fn();
Test.update = jest.fn();

describe("TodoApp component", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={Test.TEST_TODOS} />);
  });

  it("contains expected main section with className", function () {
    const { container, debug } = render(<TodoApp initialTodos={Test.TEST_TODOS} />);
    const main = container.querySelector("main");
    debug(main);
    expect(main).toHaveClass("TodoApp");
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoApp initialTodos={Test.TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });

  it("updates a todo", function () {
    const { container } = render(<TodoApp initialTodos={Test.TEST_TODOS} />);

    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);

    const submitButton = container.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(submitButton);

    expect(container).toContainHTML("Updated!");
  });

  it("removes a todo", function () {

    const updatedTodos = [
      {
        id: 2,
        title: "Make dinner",
        description: "Cook something healthy",
        priority: 1,
      },
      {
        id: 3,
        title: "Go to bed",
        description: "In bed by 11:15",
        priority: 3,
      },
    ];
    Test.remove.mockReturnValueOnce(updatedTodos);

    const { container } = render(<TodoApp initialTodos={Test.TEST_TODOS} />);

    const deleteButton = container.querySelector(".EditableTodo-delBtn");
    fireEvent.click(deleteButton);

    expect(container).not.toContainHTML("Write some code");
  });

});
