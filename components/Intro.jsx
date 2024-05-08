import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../css/PoppingAnimation.module.css";

const PoppingAnimation = ({ color, text, delay = 200 }) => {
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
    <div style={{color: color}} className={styles["popping-animation"]}>
      {displayedText.split("").map((letter, index) => (
        <span key={index} className={styles["popping-letter"]}>
          {letter}
        </span>
      ))}
    </div>
  );
};

function Intro() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to handle screen size changes
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    handleResize(); // Check screen size on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    containerStyle: {
      minHeight: "40vh",
      padding: "0 0.5rem",
      paddingBottom: "40vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      transition: "background 0.5s ease", // Add a transition effect
    },
    box: {
      paddingLeft: "50px",
      marginTop: "8em",
      maxWidth: "1200px",
      maxWidth: "1200px", // Optional: set a max-width for the content
    },
  };

  return (
    <div style={styles.box}>
      <main style={styles.containerStyle}>
        <div style={{ fontSize: "2rem", color: "gray" }}>
          Hi! My name is <br />
          <span
            style={{
              fontWeight: "bold",
              fontSize: isSmallScreen ? "4rem" : "8rem",
              fontFamily: "Fantasy",
            }}
          >
            Kartik Seth
          </span>
          .
        </div>
        <div>
          <div
          style={{
            fontSize: isSmallScreen ? "1rem" : "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "left",
          }}
          >
            <span>
              I am a{" "}
              <PoppingAnimation color="blue" text="full Stack Developer" delay={100} />
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Intro;
