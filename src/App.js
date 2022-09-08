import React from "react";
import Button from "./Components/Button";

function App() {
  const jogo = [];

  function jogoMegasena() {
    const jogar = Math.floor(Math.random() * 59 + 1);
  }

  return (
    <div>
      <Button onClick={jogoMegasena}>MegaSena</Button>
      {jogo.map((numero) => (
        <p key={numero.indexOf}>{numero}</p>
      ))}
    </div>
  );
}

export default App;
