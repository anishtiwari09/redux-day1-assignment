import { createStore } from "redux";
import reducer from "./reducer";

export const initialState = {
  counter: 1
};
export const store = createStore(reducer);
