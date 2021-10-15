import React from "react";
import "./App.css";
import Customer from "./components/Customer";

function App() {
  return (
    <div className="App">
      <Customer
        firstName="Masayoshi"
        lastName="Sawada"
        age={30}
        isLegal={true}
      />
    </div>
  );
}

export default App;
