import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import { TEST_TODOS } from "./_testCommon";
const update = jest.fn();
const remove = jest.fn();

describe("EditableTodo component", function () {
  it("renders without crashing", function () {
    render(
      <EditableTodo todo={TEST_TODOS[0]} update={update} remove={remove} />
    );
  });

  it("contains expected div section with className", function () {
    const { container, debug } = render(
      <EditableTodo todo={TEST_TODOS[0]} update={update} remove={remove} />
    );
    const div = container.querySelector("div");
    debug(div);
    expect(div).toHaveClass("EditableTodo");
  });

  it("matches snapshot", function () {
    const { container } = render(
      <EditableTodo todo={TEST_TODOS[0]} update={update} remove={remove} />
    );
    expect(container).toMatchSnapshot();
  });

  it("works when you click edit", function () {
    const updatedTodos = [
      {
        id: 1,
        title: "Updated!",
        description: "A new description!",
        priority: 1,
      },
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
    update.mockReturnValueOnce(updatedTodos);
    const { container } = render(
      <EditableTodo todo={TEST_TODOS[0]} update={update} remove={remove} />
    );
    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);
    expect(container).toContainHTML("NewTodoForm");
  });

  it("works when you click delete", function () {
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
    remove.mockReturnValueOnce(updatedTodos);
    const { container } = render(
      <EditableTodo todo={TEST_TODOS[0]} update={update} remove={remove} />
    );
    const deleteButton = container.querySelector(".EditableTodo-delBtn");
    fireEvent.click(deleteButton);
    expect(remove).toHaveBeenCalledTimes(1);
  });
});
