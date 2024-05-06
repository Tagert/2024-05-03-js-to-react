import styles from "./styles/Hero.module.css";
import { Header } from "../../layouts/Header/Header.jsx";
import interiors1 from "../../../public/assets/interiors1.jpg";
import interiors2 from "../../../public/assets/interiors2.jpg";
import { useState } from "react";

const Hero = () => {
  return (
    <section className={styles.container}>
      <Header />

      <div className={styles.box}>
        <div className={styles.description}>
          <h1>We design beautifully crafted, luxury interiors</h1>

          <a href="#">LEARN MORE</a>
        </div>

        <div className={styles.holder}>
          <div className={styles.imageBox}>
            <img src={interiors1.src} alt="" />
            <img src={interiors2.src} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
