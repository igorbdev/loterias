import React from "react";
import Button from "./Components/Button";

function App() {
  const [jogo, setJogo] = React.useState([]);

  function jogoMegasena() {
    let megasena = [];

    while (megasena.length < 6) {
      megasena.push(Math.floor(Math.random() * 59 + 1));
    }
    setJogo([...megasena]);
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
