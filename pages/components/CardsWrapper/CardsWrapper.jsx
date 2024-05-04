import styles from "./styles/CardsWrapper.module.css";
import { Cards } from "../Cards/Cards.jsx";

const CardsWrapper = ({ cards }) => {
  return (
    <div className={styles.container}>
      {cards &&
        cards.map((card) => (
          <Cards
            key={card.id}
            imgUrl={card.img_url}
            title={card.title}
            description={card.description}
            price={card.price}
            stock={card.stock_left}
          />
        ))}
    </div>
  );
};

export { CardsWrapper };
