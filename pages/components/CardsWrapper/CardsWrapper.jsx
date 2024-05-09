import styles from "./styles/CardsWrapper.module.css";
import { Cards } from "../Cards/Cards";
import { Spinner } from "../Spinner/Spinner";

const CardsWrapper = ({ cards, setCards, btnText }) => {
  return (
    <div className={styles.container}>
      {Array.isArray(cards) ? (
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
            cards={cards}
            btnText={btnText}
          />
        ))
      ) : cards ? (
        <Cards
          key={cards.id}
          id={cards.id}
          imgUrl={cards.img_url}
          title={cards.title}
          description={cards.description}
          price={cards.price}
          stock={cards.stock_left}
          setCards={setCards}
          cards={cards}
          btnText={btnText}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export { CardsWrapper };
