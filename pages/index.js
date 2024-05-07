import styles from "../styles/App/App.module.css";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Hero } from "./components/Hero/Hero.jsx";
import { Main } from "./layouts/Main/Main.jsx";
import { Footer } from "./layouts/Footer/Footer.jsx";

// https://nicepage.com/html-templates/preview/we-design-luxury-interiors-6226046?device=desktop

const App = () => {
  const [copyright, setCopyright] = useState(
    "©2024 STUDIO. ALL RIGHTS RESERVED"
  );

  const [cards, setCards] = useState(null);

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        "https://65bb606a52189914b5bbe878.mockapi.io/products"
      );

      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <Head>
        <title>How we work</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Main cards={cards} setCards={setCards} />

      <Footer text={copyright} />
    </>
  );
};

export default App;
