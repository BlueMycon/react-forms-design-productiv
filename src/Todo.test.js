import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";
import { TEST_TODOS } from "./_testCommon";

describe("Todo component", function () {
  it("renders without crashing", function () {
    render(
      <Todo todo={TEST_TODOS[0]} />
    );
  });

  it("contains expected div section with className", function () {
    const { container, debug } = render(
      <Todo todo={TEST_TODOS[0]} />
    );
    const div = container.querySelector("div");
    debug(div);
    expect(div).toHaveClass("Todo");
  });

  it("matches snapshot", function () {
    const { container } = render(
      <Todo todo={TEST_TODOS[0]} />
    );
    expect(container).toMatchSnapshot();
  });

});
