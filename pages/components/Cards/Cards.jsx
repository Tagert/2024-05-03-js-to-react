import Link from "next/link";
import { useState } from "react";
import styles from "./styles/Cards.module.css";

const Cards = ({
  id,
  imgUrl,
  title,
  description,
  price,
  stock,
  cards,
  setCards,
  btnText,
}) => {
  const [inStock, setStock] = useState("out of stock");

  const showCardId = () => {
    console.log(id);
  };

  const removeCardFromArray = () => {
    {
      Array.isArray(cards)
        ? setCards((prevState) => prevState.filter((card) => card.id != id))
        : setTimeout(() => {
            window.location.href = "/";
          }, 500);
    }
  };
  setTimeout;
  return (
    <div
      className={styles.container}
      onClick={() => {
        showCardId();
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
      <div className={styles.button_box}>
        <Link href={`/card/${id}`} className={styles.text_link}>
          <button>More Details</button>
        </Link>

        <button
          onClick={() => {
            removeCardFromArray();
          }}
        >
          {Array.isArray(cards) ? "Remove Card" : `${btnText}`}
        </button>
      </div>
    </div>
  );
};

export { Cards };
