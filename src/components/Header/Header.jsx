import React from "react";
import styles from "./Header.module.sass";

const Header = ({ todos }) => {
  const todosLength = todos.length;
  const todosDoneLength = todos.filter((todo) => todo.isDone).length;
  const barWidth = {
    width: `${(todosDoneLength / todosLength) * 100}%`
  }

  const headerBar = (
    <div className={styles.header_bar}>
      <div className={styles.bar_total}></div>
      <div className={styles.bar_completed}></div>
    </div>
  );

  return (
    <header className={styles.header}>
      <div className={styles.header_title}>
        <div className={styles.title}>Todo title</div>
        <div className={styles.claim}>
          Tienes {todosDoneLength} de {todosLength} to-dos pendientes por hacer.
        </div>
      </div>
      <div className={styles.header_bar}>
        <div className={styles.bar_total}></div>
        <div className={styles.bar_completed} style={barWidth}></div>
      </div>
    </header>
  );
};

export default Header;
