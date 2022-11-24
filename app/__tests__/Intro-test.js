import React from "react";
import renderer from "react-test-renderer";
import Transanctions from "../src/components/expensesList";

test("renders correctly", () => {
  const tree = renderer.create(<Transanctions />).toJSON();
  expect(tree).toMatchSnapshot();
});
