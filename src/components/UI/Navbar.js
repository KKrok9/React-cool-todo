import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles["main-nav-div"]}>
      <nav className={styles.navbar}>
        <button className={styles["nav-btn"]} onClick={props.onLoginClick}>
          Login
        </button>
        <button className={styles["nav-btn"]}>Register</button>
      </nav>
    </div>
  );
};

export default Navbar;
