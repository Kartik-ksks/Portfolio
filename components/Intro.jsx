import React, { useState, useEffect } from "react";

function Intro() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const speed = 90; // Adjust the typing speed

  const styles = {
    containerStyle: {
      minHeight: "80vh",
      padding: "0 0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      transition: "background 0.5s ease", // Add a transition effect
    }
  }

  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    // Add more roles as needed
  ];

  useEffect(() => {
    const typeText = () => {
      const currentRole = roles[index % roles.length];

      if (text.length < currentRole.length) {
        setText(currentRole.substring(0, text.length + 1));
      } else {
        setText(" ");
        setIndex(index + 1);
      }
    };

    const typingInterval = setInterval(typeText, speed);

    return () => clearInterval(typingInterval);
  }, [text, index, roles, speed]);

  return (
    <div>
      <main style={styles.containerStyle}>
        <div style={{ fontSize: "2rem", color: "gray" }}>
          Hi! My name is <br />
          <span
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: "8rem",
              fontFamily: "Fantasy",
            }}
          >
            Kartik Seth
          </span>
          .
        </div>
        <div>
          <div style={{ fontSize: "3rem" }}>I am a {text}</div>
        </div>
      </main>
    </div>
  );
}

export default Intro;
