import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h3>{value}</h3>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={() => setValue(value - 1)}>Decrement</button>
      </div>
    </div>
  );
}
