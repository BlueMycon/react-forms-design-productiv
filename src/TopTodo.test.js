import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";
import { TEST_TODOS } from "./_testCommon";

describe("TopTodo component", function () {
  it("renders without crashing", function () {
    render(
      <TopTodo todos={TEST_TODOS} />
    );
  });

  it("contains expected div section with className", function () {
    const { container, debug } = render(
      <TopTodo todos={TEST_TODOS} />
    );
    const div = container.querySelector("div");
    debug(div);
    expect(div).toHaveClass("TopTodo");
  });

  it("matches snapshot", function () {
    const { container } = render(
      <TopTodo todos={TEST_TODOS} />
    );
    expect(container).toMatchSnapshot();
  });

});
