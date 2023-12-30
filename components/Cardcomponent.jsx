import React from "react";
import { motion } from "framer-motion";
import { Col, Card } from "react-bootstrap";
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
      paddingBottom: "13%",
      maxWidth: "100%",
      borderRadius: "5px",
      marginTop: "30px",
      border: "2px solid var(--border)",
    },
    heading: {
      color: "var(--fontColor)",
      marginLeft: "10px",
      fontSize: "2rem",
    },
    description: {
      fontSize: "1rem",
      margin: "12px",
      color: "var(--secondary)",
    },
    tags: {
      margin: "10px 10px 0 10px",
      fontSize: "0.95rem",
      color: "var(--subsecondary)",
    },
    link: {
      margin: "0 10px 10px 10px",
      float: "right",
    },
    icon: {
      fontSize: "1.8rem",
      color: "var(--subsecondary)",
    },
  };

  const { project } = props;
  const { tags, codeLink } = project;

  return (
    <Col sm="12" md="6" lg="6" style={{ display: "block" }}>
      <motion.span variants={childVariants}>
        <div style={styles.main}>
          <Card style={{ padding: "3em" }}>
            <div></div>
            <span style={styles.heading}>{project.name}</span>
            <div style={styles.description}>{project.description}</div>
            <div style={styles.tags}>
              {tags && tags.map((tag) => <span key={tag}>{`${tag}\t`}</span>)}
            </div>
            <div style={styles.link}>
              {codeLink && (
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faCode} style={styles.icon} />
                </a>
              )}
            </div>
          </Card>
        </div>
      </motion.span>
    </Col>
  );
}
