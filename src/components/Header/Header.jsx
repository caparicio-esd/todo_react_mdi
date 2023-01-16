import React from "react";
import styles from "./Header.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_title}>
        <div className={styles.title}>My todo list</div>
        <div className={styles.claim}>
          Tienes 6 de 12 to-dos pendientes por hacer
        </div>
      </div>
      <div className={styles.header_bar}>
        <div className={styles.bar_total}></div>
        <div className={styles.bar_completed}></div>
      </div>
    </header>
  );
};

export default Header;
