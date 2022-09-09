import React from "react";
import Button from "./Components/Button";
import styles from "./App.module.css";
import { MegaSena } from "./Components/MegaSena";
import { Quina } from "./Components/Quina";

function App() {
  const [jogo, setJogo] = React.useState([]);

  function jogoMegaSena() {
    setJogo([]);
    const jogarM = MegaSena();
    setJogo([...jogarM]);
  }

  function jogoQuina() {
    setJogo([]);
    const jogarQ = Quina();
    setJogo([...jogarQ]);
  }

  return (
    <div className={styles.app}>
      <div className={styles.jogo}>
        <Button onClick={jogoMegaSena}>MegaSena</Button>;
        <Button onClick={jogoQuina}>Quina</Button>;
      </div>
      <div className={styles.resultado}>
        {jogo.map((numero) => (
          <p key={numero.value}>{numero}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
