import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Practical React Enterprise!");
  const handleAlert = () => {
    alert("これはボタンです！");
  };

  // titleの変更をトリガーにしてeffectが起動する
  useEffect(() => {
    alert("Welcome to Practical React Enterprise");
  }, [title]);

  return (
    <div className="App">
      <h1 onClick={() => setTitle("Become an Effective React Developer")}>
        {title}
      </h1>
      <button
        style={{
          color: "#ffff",
          backgroundColor: "tomato",
          height: "5rem",
          width: "10rem",
          fontSize: "18px",
          borderRadius: "5px",
        }}
        onClick={handleAlert}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
