import React, { useState } from "react";
import "./App.css";

function App() {
  const [texto1, setTexto1] = useState("texto um");
  const [texto2, setTexto2] = useState("texto dois");

  return (
    <div className="main">
      <h1>{texto1}</h1>
      <input onChange={(e) => setTexto1(e.target.value)} />

      <h2>{texto2}</h2>
      <input onChange={(e) => setTexto2(e.target.value)} />
    </div>
  );
}

export default App;
