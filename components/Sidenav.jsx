import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  const openGmail = () => {
    const recipient = 'kartikseth28@gmail.com';
    const subject = 'Hello there!';
    const body = 'Hello, this is the default email body.';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };
  return (
    <>
      <motion.div id="sidenav">
        <div id="icon-container">
          <span>
            <a
              href="https://www.linkedin.com/in/kartik-seth-0a8696137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  padding: "3px",
                  margin: "5px",
                  color: "var(--secondary)",
                  fontSize: "1.8em",
                }}
              />
            </a>
          </span>
          <span>
            <div
            onClick={openGmail}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  padding: "3px",
                  margin: "5px",
                  color: "var(--secondary)",
                  fontSize: "1.8em",
                }}
              />
            </div>
          </span>
          <span>
            <a
              href="https://github.com/Kartik-ksks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  padding: "3px",
                  margin: "5px",
                  color: "var(--secondary)",
                  fontSize: "1.8em",
                }}
              />
            </a>
          </span>
          <span>
            <a
              href="https://www.facebook.com/kartik.seth.54/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                style={{
                  padding: "3px",
                  margin: "5px",
                  color: "var(--secondary)",
                  fontSize: "1.8em",
                }}
              />
            </a>
          </span>
        </div>
      </motion.div>
    </>
  );
}
