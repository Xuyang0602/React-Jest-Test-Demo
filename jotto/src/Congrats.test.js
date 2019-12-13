import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdaptor from "enzyme-adapter-react-16";

import Congrats from "./Congrats";
import { findByTestAttr, checkProps } from "../test/testUtils";

Enzyme.configure({ adapter: new EnzymeAdaptor() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("Render Page no error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});
test("Render no test when 'success' prope is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("Render non-empty congrats message when 'success' prop is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "congrats-message");
  expect(component.text().length).not.toBe(0);
});
test("Does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
