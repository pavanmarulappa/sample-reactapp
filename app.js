import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Simple React Counter</h1>
      <h2>{count}</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
          Decrement
        </button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

