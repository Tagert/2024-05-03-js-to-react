import styles from "./styles/Header.module.css";
import { Navbar } from "./Navbar/Navbar.jsx";
import { useState } from "react";

const Header = () => {
  const [logo, setLogo] = useState("STUDIO");

  return (
    <header className={styles.container}>
      <Navbar logo={logo} />
    </header>
  );
};

export { Header };
