import { ContactUs } from "../../components/ContactUs/ContactUs";
import { Social } from "../../components/Social/Social";
import styles from "./styles/Footer.module.css";

const Footer = ({ text }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <h4>STUDIO</h4>

        <ContactUs />

        <Social />
      </div>

      <div className={styles.copyright}>
        <p>{text}</p>
      </div>
    </footer>
  );
};

export { Footer };
