import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import styles from "./App.module.sass";

const App = () => {
  
  const todos = [
    { title: "hola", isDone: false },
    { title: "asdasd", isDone: false },
    { title: "asdasdasdas", isDone: true },
    { title: "agasfasf", isDone: false },
    { title: "sdfsdf", isDone: true },
    { title: "hoasdla", isDone: false },
    { title: "hoasdla", isDone: true },
    { title: "hoasdla", isDone: true },
    { title: "hoasdla", isDone: true },
    { title: "hoasdla", isDone: true },
    { title: "hoasdla", isDone: false },
    { title: "hoasdla", isDone: false },
    { title: "hoasdla", isDone: false },
  ];


  return (
    <div className={styles.wrapper}>
      <div className={styles.holder}>
        <Header todos={todos} />
        <Main todos={todos} />
        <ModalWindow />
      </div>
    </div>
  );
};

export default App;
