import { projects } from "../Data/projects.jsx";
import CardComponent from "../components/Cardcomponent.jsx";
import { motion } from "framer-motion";

export default function Portfolio() {
  const styles = {
    container: {
      paddingLeft: "35px",
      marginTop: "8em",
      maxWidth: "1200px",
      maxWidth: "1200px", // Optional: set a max-width for the content
    },
  };

  const attributes = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  return (
    <div style={styles.container}>
      <motion.div
        className="portfolio-wrapper"
        variants={attributes}
        initial="hidden"
        animate="visible"
      >
        <h1
          style={{
            color: "var(--secondary)",
            fontSize: "3rem",
            marginBottom: "30px",
          }}
        >
          Projects
        </h1>
        {projects.map((project) => (
          <CardComponent project={project} key={project.name} />
        ))}
      </motion.div>
    </div>
  );
}
