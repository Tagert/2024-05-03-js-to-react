import styles from "./styles/Counter.module.css";
import { useEffect, useState } from "react";

const Counter = ({ cards }) => {
  const [inputText, setInputText] = useState("default text");
  const [isShowText, setShowText] = useState(true);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const textVisibility = () => {
    setShowText(!isShowText);
  };

  useEffect(() => {
    console.log("First");
    return () => {
      console.log("END");
    };
  }, []);

  useEffect(() => {
    console.log("Second");
  }, [inputText]);

  useEffect(() => {
    console.log("Third");
  }, [inputText, isShowText]);

  useEffect(() => {
    console.log("Text changed:", input1, input2);
    if (input1.trim() !== "" && input2.trim() !== "") {
      setValidationMessage("Validation successful");
    } else {
      setValidationMessage("Please fill both inputs");
    }
  }, [input1, input2]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div
        className={
          Array.isArray(cards) ? styles.no_counter : styles.counter_holder
        }
      >
        {Array.isArray(cards) ? (
          ""
        ) : (
          <div className={styles.counter_box}>
            <p>Try our Magic Disappearing Input Text</p>

            <input
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              value={isShowText ? "default text" : ""}
            />

            <button
              onClick={() => {
                textVisibility();
              }}
            >
              {isShowText ? "Hide text" : "Show text"}
            </button>
          </div>
        )}
      </div>

      <div
        className={
          Array.isArray(cards) ? styles.no_validation : styles.validation_holder
        }
      >
        {Array.isArray(cards) ? (
          ""
        ) : (
          <div className={styles.validation_box}>
            <p>Welcome Back</p>

            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />

            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />

            <button
              type="submit"
              onClick={() => {
                setInput1("");
                setInput2("");
              }}
            >
              Click me
            </button>

            <p className={styles.status}>{validationMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Counter };
