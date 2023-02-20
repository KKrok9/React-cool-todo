import React from "react";
import { useState } from "react";
import styles from "./Register.module.css";

const Register = (props) => {
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUserPassword, setCurrentUserPassword] = useState("");

  const addNewUser = () => {
    console.log("added new user");
    localStorage.setItem(currentUserEmail, currentUserPassword);
    props.onCloseRegisterClick();
  };

  const userEmailHandler = (event) => {
    setCurrentUserEmail(event.target.value);
  };
  const userPasswordHandler = (event) => {
    setCurrentUserPassword(event.target.value);
  };

  const checkIfContainsAt = (value) => {
    if (!value.includes("@")) {
      return "Enter valid e-mail";
    } else {
      return true;
    }
  };

  return (
    <div>
      <div className={styles["register-form-outer-div"]}>
        <form className={styles["register-form"]}>
          <h2 className={styles["register-header"]}>Nice to meet you!</h2>
          <button
            className={styles["exit-btn"]}
            onClick={props.onCloseRegisterClick}
          >
            X
          </button>
          <div className={styles["input_and_label-div"]}>
            <label className={styles["label_register"]}>
              Enter your email:
            </label>
            <input
              className={styles["input_register"]}
              onChange={userEmailHandler}
            ></input>
          </div>

          <div className={styles["input_and_label-div"]}>
            <label className={styles["label_register"]}>
              Enter your password:
            </label>
            <input
              className={styles["input_register"]}
              onChange={userPasswordHandler}
            ></input>
          </div>
          <button className={styles["register_submit"]} onClick={addNewUser}>
            Register
          </button>
        </form>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default Register;
