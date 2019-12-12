import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdaptor from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdaptor() });

/**
 * Factory function to create a shallowWrapper for the App Component
 * @param {object} prop - Component props specific to this setup
 * @param {object} state   - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (prop = {}, state = null) => {
  const wrapper = shallow(<App {...prop} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} shallowWrapper - Enzyme ShallowWrapper to search within
 * @param {string} val - value of date-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByAttr = (shallowWrapper, val) => {
  return shallowWrapper.find(`[data-test="${val}"]`);
};

test("Render without Errors", () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("Render Increase Btn", () => {
  const wrapper = setup();
  const btnComponent = findByAttr(wrapper, "component-btn");
  expect(btnComponent.length).toBe(1);
});

test("Render Counter Display", () => {
  const wrapper = setup();
  const counterDisplay = findByAttr(wrapper, "component-counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("Counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("Clicking button increments counter display", () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find btn and click
  const btn = findByAttr(wrapper, "component-btn");
  btn.simulate("click");

  // find display and test value
  const counterDisplay = findByAttr(wrapper, "component-counter-display");
  // wrapper.setState({counter: this.counter + 1});
  expect(counterDisplay.text()).toContain(counter + 1);
});
