import React from "react";
import { Container } from "react-bootstrap";
import { experiences } from "../Data/experience.jsx";


const ExperienceEntry = ({ title, position, date, description }) => (
  <span style={{ color: "var(--secondary)", marginTop: "1.1em" }}>
    <div>
      <h2 style={{ color: "var(--fontColor)", fontSize: "2rem" }}>{title}</h2>
      <span
        style={{
          float: "right",
          color: "var(--subsecondary)",
          fontSize: "0.9rem",
        }}
      >
        {date}
      </span>
    </div>
    <div style={{ color: "var(--fontColor)", fontSize: "1.6rem" }}>
      {position}
    </div>
    <div style={{ marginTop: "1.5em", fontSize: "1.2rem" }}>
      <ul>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </span>
);
export default function Experience() {
  return (
    <div style={{marginLeft: "35px"}}>
      <h1
        style={{
          color: "var(--secondary)",
          fontSize: "3rem",
          marginBottom: "30px",
          marginTop: "5px",
        }}
      >
        Experience
      </h1>
      <Container>
        {experiences.map((experience, index) => (
          <ExperienceEntry key={index} {...experience} />
        ))}
      </Container>
    </div>
  );
}
