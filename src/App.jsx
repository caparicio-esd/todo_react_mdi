import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import styles from "./App.module.sass";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.holder}>
        <Header />
        <Main />
        <ModalWindow />
      </div>
    </div>
  );
};

export default App;
