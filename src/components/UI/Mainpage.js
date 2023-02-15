import React from "react";
import styles from "./Mainpage.module.css";
import photo from "../../images/hard-work.jpg";
import Navbar from "./Navbar";

const Mainpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className = {styles['section-mainContent']}>
      <div className = {styles['text-section']}>
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
