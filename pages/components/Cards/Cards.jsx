import { useState } from "react";
import styles from "./styles/Cards.module.css";

const Cards = ({ id, imgUrl, title, description, price, stock, setCards }) => {
  const [inStock, setStock] = useState("out of stock");

  const showCardId = () => {
    console.log(id);
  };

  const removeCardFromArray = () => {
    setCards((prevState) => prevState.filter((card) => card.id != id));
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        showCardId();
        removeCardFromArray();
      }}
    >
      {imgUrl ? (
        <img src={imgUrl} />
      ) : (
        <img src="https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" />
      )}
      <h4>{title}</h4>
      <p>{description}</p>
      <p>
        <span>{price}</span>€
      </p>
      <p>{stock <= 0 ? inStock : `${stock} units left`}</p>
    </div>
  );
};

export { Cards };
