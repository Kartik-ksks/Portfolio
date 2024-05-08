import React from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function CardComponent(props) {
  const childVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const styles = {
    main: {
      height: "100%",
      padding: "5%",
      maxWidth: "100%",
      borderRadius: "5px",
      margin: "30px",
      border: "2px solid var(--border)",
      backgroundColor: "#A9A9A9",
    },
    heading: {
      color: "var(--fontColor)",
      marginLeft: "10px",
      fontSize: "2rem",
      margin: "2rem",
    },
    box: {
      padding: "20px",
      marginLeft: "20px",
    },
    description: {
      fontSize: "1rem",
      marginLeft: "15px",
      paddingTop: "20px",
      color: "var(--secondary)",
    },
    tags: {
      margin: "10px 10px 0 10px",
      fontSize: "0.95rem",
      color: "var(--subsecondary)",
    },
    link: {
      margin: "5px",
      float: "right",
      top: "0",
    },
    icon: {
      fontSize: "1.8rem",
      color: "blue",
    },
  };

  const { project } = props;
  const { tags, codeLink } = project;

  return (
    <motion.span variants={childVariants}>
      <div style={{ marginLeft: "35px", maxWidth: "100%" }}>
        <Card bg="primary" style={styles.main}>
          <span style={styles.heading}>
            <>{project.name}</>
            <>
              {codeLink && (
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faCode} style={styles.icon} />
                </a>
              )}
            </>
          </span>
          <div style={styles.box}>
            <div style={styles.description}>{project.description}</div>
            <div style={styles.tags}>
              {tags && tags.map((tag) => <span key={tag}>{`${tag}\t`}</span>)}
            </div>
          </div>
        </Card>
      </div>
    </motion.span>
  );
}
