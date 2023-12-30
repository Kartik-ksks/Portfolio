import React, { useState, useEffect } from "react";
import styles from "../css/PoppingAnimation.module.css";

const PoppingAnimation = ({ text, delay = 200 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeoutIds = [];

    for (let i = 0; i < text.length; i++) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[i]);
      }, i * delay);

      timeoutIds.push(timeoutId);
    }

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [text, delay]);

  return (
    <div className={styles["popping-animation"]}>
      {displayedText.split("").map((letter, index) => (
        <span key={index} className={styles["popping-letter"]}>
          {letter}
        </span>
      ))}
    </div>
  );
};

function Intro() {
  const styles = {
    containerStyle: {
      minHeight: "80vh",
      padding: "0 0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      transition: "background 0.5s ease", // Add a transition effect
    },
  };

  return (
    <div>
      <main style={styles.containerStyle}>
        <div style={{ fontSize: "2rem", color: "gray" }}>
          Hi! My name is <br />
          <span
            style={{
              fontWeight: "bold",
              fontSize: "8rem",
              fontFamily: "Fantasy",
            }}
          >
            Kartik Seth
          </span>
          .
        </div>
        <div>
          <div style={{ fontSize: "3rem" }}>
            <span>
              I am a{" "}
              <PoppingAnimation text="full Stack Developer" delay={100} />
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Intro;
