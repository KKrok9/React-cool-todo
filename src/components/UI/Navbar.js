import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["main-nav-div"]}>
      <nav className={styles.navbar}>
        <button className={styles["nav-btn"]}>Login</button>
        <button className={styles["nav-btn"]}>Password</button>
      </nav>
    </div>
  );
};

export default Navbar;
