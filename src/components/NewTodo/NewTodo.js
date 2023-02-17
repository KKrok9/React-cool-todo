import React from "react";
import styles from "./NewTodo.module.css";
const NewTodo = () => {
  return (
    <div className={styles["container"]}>
      <label className={styles["newTodo-item"]}>New todo</label>
      <input className={styles["newTodo-item"]}></input>
      <button className={styles["newTodo-item"]}>Add</button>
    </div>
  );
};

export default NewTodo;
