import React from "react";
import Button from "./Components/Button";
import styles from "./App.module.css";
import { MegaSena } from "./Components/MegaSena";

function App() {
  const [jogo, setJogo] = React.useState([]);

  function jogoMegaSena() {
    const teste = MegaSena();
    setJogo([...teste]);
  }

  return (
    <div className={styles.app}>
      <div className={styles.jogo}>
        <Button onClick={jogoMegaSena}>MegaSena</Button>;
        {jogo.map((numero) => (
          <p key={numero.index}>{numero}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
