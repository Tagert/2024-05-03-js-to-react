import { useState } from "react";
import styles from "./styles/Navbar.module.css";
import { NavList } from "../NavList/NavList";
import { MobileMenu } from "../MobileMenu/MobileMenu";

const Navbar = ({ logo }) => {
  const [nav, setNav] = useState([
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "About",
      href: "#",
    },
    {
      id: 3,
      title: "Contact Us",
      href: "#",
    },
    {
      id: 4,
      title: "Learn More",
      href: "#",
    },
  ]);

  const [isDisplayMobileMenu, setDisplayMobileMenu] = useState(false);

  const onBurgerBtnClick = () => {
    setDisplayMobileMenu(!isDisplayMobileMenu);
  };

  return (
    <div className={styles.container}>
      <h1>{logo}</h1>

      <NavList onBurgerBtnClick={onBurgerBtnClick} nav={nav} />

      {isDisplayMobileMenu && <MobileMenu nav={nav} />}
    </div>
  );
};

export { Navbar };
