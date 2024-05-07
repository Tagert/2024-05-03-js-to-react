import styles from "./styles/CardsWrapper.module.css";
import { Cards } from "../Cards/Cards";
import { Spinner } from "../Spinner/Spinner";

const CardsWrapper = ({ cards, setCards }) => {
  return (
    <div className={styles.container}>
      {cards ? (
        cards.map((card) => (
          <Cards
            key={card.id}
            id={card.id}
            imgUrl={card.img_url}
            title={card.title}
            description={card.description}
            price={card.price}
            stock={card.stock_left}
            setCards={setCards}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export { CardsWrapper };
