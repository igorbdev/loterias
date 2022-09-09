import React from "react";
import Button from "./Components/Button";
import styles from "./App.module.css";
import { MegaSena } from "./Components/MegaSena";
import { Quina } from "./Components/Quina";
import { Lotofacil } from "./Components/Lotofacil";
import Header from "./Header";

function App() {
  const [jogo, setJogo] = React.useState([]);
  const [nome, setNome] = React.useState("");

  function jogoMegaSena() {
    setJogo([]);
    const jogarM = MegaSena();
    setJogo([...jogarM]);
    setNome("Mega-Sena");
  }

  function jogoQuina() {
    setJogo([]);
    const jogarQ = Quina();
    setJogo([...jogarQ]);
    setNome("Quina");
  }

  function jogoLotofacil() {
    setJogo([]);
    const jogarL = Lotofacil();
    setJogo([...jogarL]);
    setNome("Lotofácil");
  }

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.jogo}>
        <Button onClick={jogoMegaSena}>MegaSena</Button>;
        <Button onClick={jogoQuina}>Quina</Button>;
        <Button onClick={jogoLotofacil}>Lotofácil</Button>;
      </div>
      <div className={styles.resultado}>
        <h2>{nome}</h2>
        {jogo.map((numero) => (
          <p key={numero.value}>{numero}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
