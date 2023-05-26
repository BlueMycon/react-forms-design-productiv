import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";
import { TEST_TODOS } from "./_testCommon";
const update = jest.fn();
const remove = jest.fn();


describe("EditableTodoList component", function () {
  it("renders without crashing", function () {
    render(
      <EditableTodoList todos={TEST_TODOS} update={update} remove={remove} />
    );
  });

  it("contains expected div section with className", function () {
    const { container, debug } = render(
      <EditableTodoList todos={TEST_TODOS} update={update} remove={remove} />
    );
    const div = container.querySelector("div");
    debug(div);
    expect(div).toHaveClass("EditableTodoList");
  });

  it("matches snapshot", function () {
    const { container } = render(
      <EditableTodoList todos={TEST_TODOS} update={update} remove={remove} />
    );
    expect(container).toMatchSnapshot();
  });
});
