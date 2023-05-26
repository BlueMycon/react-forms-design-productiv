import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import {TEST_TODOS} from "./_testCommon";

describe("TodoApp component", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={TEST_TODOS} />);
  });

  it("contains expected main section with className", function () {
    const { container, debug } = render(<TodoApp initialTodos={TEST_TODOS} />);
    const main = container.querySelector("main");
    debug(main);
    expect(main).toHaveClass("TodoApp");
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoApp initialTodos={TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});
