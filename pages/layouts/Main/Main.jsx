import styles from "./styles/Main.module.css";
import { CardsWrapper } from "../../components/CardsWrapper/CardsWrapper";
import { Counter } from "../../components/Counter/Counter";

const Main = ({ cards, setCards, btnText, paragraph, heading }) => {
  return (
    <main className={styles.container}>
      <div className={styles.description_holder}>
        <div className={styles.description_box}>
          {cards && (
            <h2>
              {Array.isArray(cards)
                ? "Complete Interior Design Service"
                : heading}
            </h2>
          )}
          <p>
            {cards &&
              (Array.isArray(cards)
                ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                : paragraph)}
          </p>
        </div>

        <CardsWrapper cards={cards} setCards={setCards} btnText={btnText} />
      </div>

      <Counter cards={cards} />
    </main>
  );
};

export { Main };
