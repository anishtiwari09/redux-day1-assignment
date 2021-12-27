import { useContext, useState } from "react";
import { decrementAction, incrementAction } from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";

export default function Calculator() {
  let store = useContext(AppContext);
  const [state, setState] = useState(0);
  const { getState, dispatch } = useContext(AppContext);
  const forceUpdate = () => setState(state + 1);
  const { counter } = getState();
  const handleIncrement = () => {
    dispatch(incrementAction(1));
    forceUpdate();
  };
  const handleDecrement = () => {
    dispatch(decrementAction(1));
    forceUpdate();
  };
  return (
    <>
      <div>
        <h3>{counter}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}
