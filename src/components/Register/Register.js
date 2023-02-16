import React from "react";
import styles from "./Register.module.css";

const Register = (props) => {
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
            <input className={styles["input_register"]}></input>
          </div>

          <div className={styles["input_and_label-div"]}>
            <label className={styles["label_register"]}>
              Enter your password:
            </label>
            <input className={styles["input_register"]}></input>
          </div>
          <button className={styles["register_submit"]}>Register</button>
        </form>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default Register;
