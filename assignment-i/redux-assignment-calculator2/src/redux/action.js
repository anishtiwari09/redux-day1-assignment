import { actionType } from "./actionType";

export const multiplyValueAction = (value) => ({
  type: actionType.MULTIPLY,
  payload: value
});

export const divideValueAction = (value) => ({
  type: actionType.DIVIDE,
  payload: value
});
export const incrementValueAction = (value) => ({
  type: actionType.INCREMENT,
  payload: value
});

export const decrementValueAction = (value) => ({
  type: actionType.DECREMENT,
  payload: value
});
