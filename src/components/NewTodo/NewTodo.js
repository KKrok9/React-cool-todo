import React from "react";
import { useState } from "react";
import styles from "./NewTodo.module.css";

const NewTodo = (props) => {
  const currentUserTodosKey = props.currentUserTodosKey;

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(currentUserTodosKey))
  );
  if (todos == null) {
    setTodos("");
  }

  const currentTodoValueHandler = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodoToLocalStorage = () => {
    localStorage.setItem(
      currentUserTodosKey.toString(),
      JSON.stringify([newTodo, ...todos])
    );
    setTodos(JSON.parse(localStorage.getItem(currentUserTodosKey)));
    props.updateUpTodos(JSON.parse(localStorage.getItem(currentUserTodosKey)));
  };

  return (
    <div className={styles["container"]}>
      <label className={styles["newTodo-item"]}>New todo</label>
      <input
        className={styles["newTodo-item"]}
        onChange={currentTodoValueHandler}
      ></input>
      <button
        className={styles["newTodo-item"]}
        onClick={addTodoToLocalStorage}
      >
        Add
      </button>
    </div>
  );
};

export default NewTodo;
