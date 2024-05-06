import styles from "./styles/MobileMenu.module.css";

const MobileMenu = ({ nav }) => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          {nav.map((n) => (
            <li key={n.id}>
              <a href={n.href}>{n.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { MobileMenu };
