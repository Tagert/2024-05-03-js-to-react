import styles from "./styles/Hero.module.css";
import Image from "next/image";
import interiors1 from "../../../public/assets/interiors1.jpg";
import interiors2 from "../../../public/assets/interiors2.jpg";
import { Header } from "../../layouts/Header/Header.jsx";

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
            <Image alt="interiors image" src={interiors1} priority />
            <Image alt="interiors image" src={interiors2} priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
