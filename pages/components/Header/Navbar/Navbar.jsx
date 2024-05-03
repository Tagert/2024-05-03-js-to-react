import { useState } from "react";
import styles from "./styles/Navbar.module.css";

const Navbar = ({ logo }) => {
  const [isDisplayMobileMenu, setDisplayMobileMenu] = useState(false);

  const onBurgerBtnClick = () => {
    setDisplayMobileMenu(!isDisplayMobileMenu);
  };

  return (
    <navbar className={styles.container}>
      <h1>{logo}</h1>

      <nav className={styles.navList}>
        <a href="#">About</a>
        <a href="#">News</a>
        <a href="#">Contact Us</a>
        <a href="#">Learn More</a>

        <button onClick={onBurgerBtnClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
      </nav>

      {isDisplayMobileMenu && (
        <div className={styles.mobileMenu}>
          <nav>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Learn More</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </navbar>
  );
};

export { Navbar };
