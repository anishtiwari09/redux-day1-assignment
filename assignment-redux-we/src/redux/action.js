import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actionType";

export const incrementAction = (value) => {
  return {
    type: INCREMENT_COUNTER,
    payload: value
  };
};

export const decrementAction = (value) => {
  return {
    type: DECREMENT_COUNTER,
    payload: value
  };
};
