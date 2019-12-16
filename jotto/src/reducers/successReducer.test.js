import success from "./successReducer";
import { actionType } from "../actions/index";

test("return default initial state of `false` when no action is passed", () => {
  const newState = success(undefined, {});
  expect(newState).toBe(false);
});

test("return state of true upon receiving an action of type `CORRECT_GUESS`", () => {
  const newState = success(undefined, { type: actionType.CORRECT_GUESS });
  expect(newState).toBe(true);
});
