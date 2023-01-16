import { ChatCircle } from "phosphor-react";
import React from "react";
import styles from "./Button.module.sass";

const Button = () => {
  return (
    <button className={styles.button}>
      <div className="icon">
        <ChatCircle size={24} weight="fill" />
      </div>
      <div className="label">Button</div>
    </button>
  );
};

export default Button;
