import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

const Login = (props) => {
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUserPassword, setCurrentUserPassword] = useState("");

  const checkIfEverythingOk = () => {
    console.log(currentUserEmail);
    // Check if email contains @
    if (currentUserEmail.includes("@")) {
      console.log("includes");
      //check if email exists
      if (localStorage.getItem(currentUserEmail) === currentUserPassword) {
        console.log("loggedInto");
        props.setLogin();
        console.log("fadsfadsfas");
      }
    }
  };

  const userEmailHandler = (event) => {
    setCurrentUserEmail(event.target.value);
  };
  const userPasswordHandler = (event) => {
    setCurrentUserPassword(event.target.value);
  };

  return (
    <div className={styles["login-form-outer-div"]}>
      <form className={styles["login-form"]}>
        <h2 className={styles["login-header"]}>Welcome back!</h2>
        <button
          className={styles["exit-btn"]}
          onClick={props.onCloseLoginClick}
        >
          X
        </button>
        <div className={styles["input_and_label-div"]}>
          <label className={styles["label_login"]}>Enter your email:</label>
          <input
            className={styles["input_login"]}
            onChange={userEmailHandler}
          ></input>
        </div>

        <div className={styles["input_and_label-div"]}>
          <label className={styles["label_login"]}>Enter your password:</label>
          <input
            className={styles["input_login"]}
            onChange={userPasswordHandler}
          ></input>
        </div>
        <button
          className={styles["login_submit"]}
          onClick={checkIfEverythingOk}
        >
          Submit
        </button>
      </form>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Login;
