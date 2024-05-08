import React from "react";

export default function Footer() {
  const styles = {
    footer: {
      width: "100%",
      height: "100px",
      borderTop: "1px solid #eaeaea",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bottom: "0",
    }
  };

  return <div className="padding-top"style={styles.footer}>made with ❤️ by Kartik Seth.</div>;
}
