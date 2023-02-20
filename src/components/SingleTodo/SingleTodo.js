import React from "react";
import { useState } from "react";
import styles from "./SingleTodo.module.css";

const SingleTodo = (props) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(props.currentUserTodosKey))
  );

  const removeItem = () => {
    setTodos(todos.splice(props.index, 1));
    localStorage.setItem(
      props.currentUserTodosKey.toString(),
      JSON.stringify([todos])
    );
    props.updateUpTodos(todos);
  };
  return (
    <div>
      {props.todoValue.length !== 0 && 
        <div className={styles["todo-row"]}>
          <p className={styles["todo-row__item"]}>{props.todoValue}</p>
          <button className={styles["todo-row__item"]} onClick={removeItem}>
            Mark as done
          </button>
        </div>
      }
    </div>
  );
};

export default SingleTodo;
