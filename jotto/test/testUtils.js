import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "../src/reducers";

export const findByTestAttr = (shallowWrapper, val) => {
  return shallowWrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};
