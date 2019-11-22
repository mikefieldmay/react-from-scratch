import React from "react";
import Pizza from "./Pizza";
import renderer from "react-test-renderer";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Pizza />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
