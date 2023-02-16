import React from "react";
import { useState } from "react";
import styles from "./Mainpage.module.css";
import photo from "../../images/hard-work.jpg";
import Navbar from "./Navbar";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Mainpage = (props) => {
  const [loginModalState, setLoginModalState] = useState(false);
  const [registerModalState, setRegisterModalState] = useState(false);

  const openLoginModalHandler = () => {
    setLoginModalState(true);
  };

  const openRegisterModalHandler = () => {
    setRegisterModalState(true);
  };

  const closeLoginModalHandler = () => {
    setLoginModalState(false);
  };

  const closeRegisterModalHandler = () => {
    setRegisterModalState(false);
  };

  return (
    <div>
      <Navbar
        onLoginClick={openLoginModalHandler}
        onRegisterClick={openRegisterModalHandler}
      ></Navbar>
      {registerModalState === true && (
        <Register onCloseRegisterClick={closeRegisterModalHandler}></Register>
      )}
      {loginModalState === true && (
        <Login onCloseLoginClick={closeLoginModalHandler} setLogin = {props.setLogin}></Login>
      )}

      <section className={styles["section-mainContent"]}>
        <div className={styles["text-section"]}>
          <h1>
            Plan your
            <span className={styles.highlight}> whole</span> day <br />
          </h1>
          <h4 className={styles.highlight}>Keep an eye on everything</h4>
        </div>
        <img src={photo} alt="photo" className={styles.photo} />
      </section>
    </div>
  );
};

export default Mainpage;
