import { useState } from "react";
import styles from "./styles/Cards.module.css";

const Cards = ({ imgUrl, title, description, price, stock }) => {
  const [inStock, setStock] = useState("out of stock");

  return (
    <div className={styles.container}>
      <img src={imgUrl} />
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
