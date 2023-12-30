import React from "react";

export default function footer() {
  const styles = {
    footer: {
      width: "100%",
      height: "100px",
      borderTop: "1px solid #eaeaea",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }
  return <div style={styles.footer}>made with ❤️ by Kartik Seth.</div>;
}
