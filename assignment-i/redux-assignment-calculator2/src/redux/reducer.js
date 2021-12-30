import { actionType } from "./actionType";

const initialState = {
  value: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT: {
      return {
        ...state,
        value: state.value + action.payload
      };
    }
    case actionType.DECREMENT: {
      return {
        ...state,
        value: state.value - action.payload
      };
    }
    case actionType.MULTIPLY: {
      return {
        ...state,
        value: state.value * action.payload
      };
    }
    case actionType.DIVIDE: {
      return {
        ...state,
        value: state.value / action.payload
      };
    }

    default:
      return state;
  }
};
