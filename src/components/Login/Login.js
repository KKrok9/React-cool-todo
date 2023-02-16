import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
const Login = (props) => {
  
  return (
    <div className={styles["login-form-outer-div"]}>
      <form className={styles["login-form"]}>
        <h2 className = {styles["login-header"]}>Welcome back!</h2>
      <button className={styles["exit-btn"]} onClick={props.onCloseLoginClick}>X</button>
        <div className = {styles["input_and_label-div"]}>
          <label className={styles["label_login"]}>Enter your email:</label>
          <input className = {styles["input_login"]}></input>
        </div>

        <div className = {styles["input_and_label-div"]}>
          <label className={styles["label_login"]}>Enter your password:</label>
          <input className = {styles["input_login"]}></input>
        </div>
        <button className = {styles['login_submit']}>Submit</button>
      </form>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Login;
