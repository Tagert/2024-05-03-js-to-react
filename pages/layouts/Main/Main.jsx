import styles from "./styles/Main.module.css";
import { CardsWrapper } from "../../components/CardsWrapper/CardsWrapper.jsx";

const Main = ({ cards, setCards }) => {
  return (
    <main className={styles.container}>
      <div className={styles.description_box}>
        <h2>Complete Interior Design Service</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <CardsWrapper cards={cards} setCards={setCards} />
    </main>
  );
};

export { Main };
