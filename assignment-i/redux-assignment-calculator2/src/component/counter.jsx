import { useContext, useState } from "react";
import {
  decrementValueAction,
  divideValueAction,
  incrementValueAction,
  multiplyValueAction
} from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";

export default function MathmaticalOperation() {
  const [value, setValue] = useState(0);
  const [state, setState] = useState("");
  const forceUpdate = () => {
    setState(getState().value);
  };
  const { dispatch, getState } = useContext(AppContext);
  const handleDivide = () => {
    console.log(value);
    if (value != 0) {
      dispatch(divideValueAction(Number(value)));
      forceUpdate();
    } else {
      setState("Can't Possible");
    }
  };
  return (
    <div>
      <div>
        <h3>{state}</h3>
      </div>
      <input
        type="number"
        value={value}
        placeholder="Enter a number"
        onChange={(e) => setValue(e.target.value)}
      />
      <div>
        <div
          style={{
            margin: "1rem",
            justifyContent: "center",
            display: "flex",
            gap: "1rem"
          }}
        >
          <button
            onClick={() => {
              dispatch(incrementValueAction(Number(value)));
              forceUpdate();
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              dispatch(decrementValueAction(Number(value)));
              forceUpdate();
            }}
          >
            Subtract
          </button>
        </div>
        <div
          style={{
            margin: "1rem",
            justifyContent: "center",
            display: "flex",
            gap: "1rem"
          }}
        >
          <button
            onClick={() => {
              dispatch(multiplyValueAction(Number(value)));
              forceUpdate();
            }}
          >
            Multiply
          </button>
          <button onClick={handleDivide}>Divide</button>
        </div>
      </div>
    </div>
  );
}
