import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Practical React Enterprise!");
  return (
    <div className="App">
      <h1 style={{ color: "blue", marginBottom: "5pt" }}>{title}</h1>
    </div>
  );
}

export default App;
