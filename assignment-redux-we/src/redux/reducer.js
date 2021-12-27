import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actionType";
import { initialState } from "./store";

export default function reducer(state = initialState, { type, payload }) {
  console.log(type, state);
  switch (type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + payload
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter - payload
      };
    }
    default: {
      return state;
    }
  }
}
