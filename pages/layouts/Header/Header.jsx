import styles from "./styles/Header.module.css";
import { useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar.jsx";

const Header = () => {
  const [logo, setLogo] = useState("STUDIO");

  return (
    <header className={styles.container}>
      <Navbar logo={logo} />
    </header>
  );
};

export { Header };
