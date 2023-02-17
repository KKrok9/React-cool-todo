import React from "react";
import styles from "./TodosList.module.css";
import SingleTodo from '../SingleTodo/SingleTodo.js';
import NewTodo from "../NewTodo/NewTodo";
const TodosList = () => {
  return (
    <div>
      <NewTodo></NewTodo>
      <div className={styles["container"]}>
        <SingleTodo></SingleTodo>
      </div>
    </div>
  );
};

export default TodosList;
