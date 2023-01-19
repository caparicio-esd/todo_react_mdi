import { Circle, XCircle } from "phosphor-react";
import React from "react";
import styles from "./Todo.module.sass";

const Todo = ({ todo }) => {
  const { title, isDone } = todo;

  return (
    <article className={styles.todo}>
      <div className={styles.todo_title}>{title}</div>
      <div className={styles.todo_ctas}>
        <div className={styles.todo_done}>
          {isDone ? <Circle size={26} weight="fill" /> : <Circle size={26} />}
        </div>
        <div className={styles.todo_close}>
          <XCircle size={26} />
        </div>
      </div>
    </article>
  );
};

export default Todo;
