import React, { useState } from "react";
import styles from "./TodosList.module.css";
import SingleTodo from "../SingleTodo/SingleTodo.js";
import NewTodo from "../NewTodo/NewTodo";
const TodosList = (props) => {
  const currentUser = localStorage.getItem("currentlyLoggedUser");
  const currentUserTodosKey = currentUser + "Todos";
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(currentUserTodosKey))
  );

  const updatingTodosHandler = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <div>
      <NewTodo
        currentUser={currentUser}
        currentUserTodosKey={currentUserTodosKey}
        updateUpTodos={updatingTodosHandler}
      ></NewTodo>
      <div className={styles["container"]}>
        {todos !== null &&
          todos.map((element, index) => {
            if(element!==[] && element!==""){
              console.log(element)
            return (
              <SingleTodo
                key={Math.random()}
                todoValue={element}
                index={index}
                currentUserTodosKey={currentUserTodosKey}
                updateUpTodos={updatingTodosHandler}
              ></SingleTodo>
        
            )};
          })}
      </div>
      <button className={styles["logout-btn"]} onClick={props.logout}>
        Logout
      </button>
    </div>
  );
};

export default TodosList;
