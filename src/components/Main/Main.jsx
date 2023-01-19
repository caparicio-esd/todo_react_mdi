import React from "react";
import Button from "../Button/Button";
import Todo from "../Todo/Todo";
import styles from "./Main.module.sass";

const Main = ({todos}) => {


  // 
  const todosLoop = (
    <div className={styles.todo_list}>
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </div>
  );

  // 
  const todosNoContent = <div>No hay contenido...</div>;

  return (
    <main className={styles.main}>
      {todos.length > 0 ? todosLoop : todosNoContent}

      <div className={styles.add_new_holder}>
        <Button />
      </div>
    </main>
  );
};

export default Main;
