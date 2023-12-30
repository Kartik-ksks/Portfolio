import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  const openGmail = () => {
    const recipient = "kartikseth28@gmail.com";
    const subject = "Hello there!";
    const body = "Hello, this is the default email body.";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          bottom: "20px", // Adjust the distance from the bottom
          left: "10px",
          paddingBottom: "15%"
        }}
      >
        <span style={{ marginBottom: "10px" }}>
          <a
            href="https://www.linkedin.com/in/kartik-seth-0a8696137/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="faicon"
              style={{ fontSize: "1.8em" }}
            />
          </a>
        </span>
        <span style={{ marginBottom: "10px" }}>
          <div onClick={openGmail} role="button">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="faicon"
              style={{ fontSize: "1.8em" }}
            />
          </div>
        </span>
        <span style={{ marginBottom: "10px" }}>
          <a
            href="https://github.com/Kartik-ksks"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="faicon"
              style={{ fontSize: "1.8em" }}
            />
          </a>
        </span>
        <span style={{ marginBottom: "10px" }}>
          <a
            href="https://www.facebook.com/kartik.seth.54/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="faicon"
              style={{ fontSize: "1.8em" }}
            />
          </a>
        </span>
      </div>
    </div>
  );
}
