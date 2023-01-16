import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./ModalWindow.module.sass";

const ModalWindow = () => {
  return (
    <div className={styles.modal_window}>
      <div className={styles.modal_window_holder}>
        <h3 className={styles.title}>asdasd</h3>
        <form className={styles.form}>
          <div className={styles.form_control}>
            <div className={styles.form_control_label}>
              <label htmlFor="todo">Add todo</label>
            </div>
            <div className={styles.form_control_input}>
              <Input />
            </div>
          </div>
          <div className={styles.form_control_row}>
            <div className={styles.form_control_button}>
              <Button />
            </div>
            <div className={styles.form_control_button}>
              <Button />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow;
