import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "./iconloterias.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Logo className={styles.logo} />
          <h1>Gerador de Jogos</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
