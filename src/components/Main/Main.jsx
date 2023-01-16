import React from "react";
import Button from "../Button/Button";
import Todo from "../Todo/Todo";
import styles from "./Main.module.sass";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.todo_list}>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
      <div className={styles.add_new_holder}>
        <Button />
      </div>
    </main>
  );
};

export default Main;
