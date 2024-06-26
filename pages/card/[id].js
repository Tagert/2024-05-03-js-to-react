import styles from "./styles/CardPage.module.css";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";
import { Footer } from "../layouts/Footer/Footer";

const CardPage = () => {
  const router = useRouter();
  const [copyright, setCopyright] = useState(
    "©2024 STUDIO. ALL RIGHTS RESERVED"
  );

  const [btnText, setBtnText] = useState("<- Go Back");
  const [heading, setHeading] = useState("Detail in Interior Design");
  const [paragraph, setParagraph] = useState(
    "The saying 'The devil is in the details' (attributed to the philosopher Nietzsche) may sound like an ominous warning - but when we are considering the phrase in the context of architecture and interior design, what we really mean is that even the grandest project depends on the success of the smallest components."
  );

  const [card, setCard] = useState(null);

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        `https://65bb606a52189914b5bbe878.mockapi.io/products/${router.query.id}`
      );

      setCard(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    router.query.id && fetchCards();
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>How we work</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
      </div>

      <Main
        cards={card}
        setCards={setCard}
        btnText={btnText}
        paragraph={paragraph}
        heading={heading}
      />

      <Footer text={copyright} />
    </>
  );
};

export default CardPage;
