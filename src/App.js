import React from "react";
import Button from "./Components/Button";
import styles from "./App.module.css";
import { MegaSena } from "./Components/MegaSena";
import { Quina } from "./Components/Quina";
import { Lotofacil } from "./Components/Lotofacil";
import Header from "./Header";
import { ReactComponent as LogoMegasena } from "./iconmegasena.svg";
import { ReactComponent as LogoQuina } from "./iconquina.svg";
import { ReactComponent as LogoLotofacil } from "./iconlotofacil.svg";

function App() {
  const [jogo, setJogo] = React.useState([]);
  const [nome, setNome] = React.useState("");
  const [cor, setCor] = React.useState("");

  function jogoMegaSena() {
    setJogo([]);
    const jogarM = MegaSena();
    setJogo([...jogarM]);
    setNome("Mega-Sena");
    setCor("#019350");
  }

  function jogoQuina() {
    setJogo([]);
    const jogarQ = Quina();
    setJogo([...jogarQ]);
    setNome("Quina");
    setCor("#37297f");
  }

  function jogoLotofacil() {
    setJogo([]);
    const jogarL = Lotofacil();
    setJogo([...jogarL]);
    setNome("Lotofácil");
    setCor("#72004c");
  }

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.container}>
        <div>
          <div className={styles.jogo}>
            <Button className={styles.megasena} onClick={jogoMegaSena}>
              <span>
                <LogoMegasena />
              </span>
              MegaSena
            </Button>
            <Button className={styles.quina} onClick={jogoQuina}>
              <span>
                <LogoQuina />
              </span>
              Quina
            </Button>
            <Button className={styles.lotofacil} onClick={jogoLotofacil}>
              <span>
                <LogoLotofacil />
              </span>
              Lotofácil
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.resultado}>
          <h2 style={{ color: cor }}>{nome}:</h2>
          <div className={styles.resultadoNumero}>
            {jogo.map((numero) => (
              <p
                style={{ backgroundColor: cor, borderColor: cor }}
                key={numero.value}
              >
                {numero}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
