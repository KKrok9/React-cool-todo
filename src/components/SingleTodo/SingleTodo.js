import React from "react";
import styles from "./SingleTodo.module.css";
const SingleTodo = () => {
  return (
    <div>
      <div className={styles["todo-row"]}>
        <p className={styles["todo-row__item"]}>Todo name</p>
        <button className={styles["todo-row__item"]}>Mark as done</button>
      </div>
    </div>
  );
};

export default SingleTodo;
