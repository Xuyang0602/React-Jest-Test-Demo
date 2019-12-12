import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdaptor from "enzyme-adapter-react-16";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({ adapter: new EnzymeAdaptor() });

test("Render without Errors", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("Render Increase Btn", () => {});

test("Render Counter Display", () => {});

test("Counter starts at 0", () => {});

test("Clicking button increments counter display", () => {});
