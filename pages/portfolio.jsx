import Navbar from "../components/Navbar.jsx";
import Head from "next/head";
import Experience from "../components/Experience.jsx";
import { motion } from "framer-motion";
import Portfolio from "../components/Portfolio.jsx";
import SideBar from "../components/SideBar.jsx";
import Footer from "../components/Footer.jsx";
import { useTheme } from "next-themes";

function portfolio() {
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
  const style = {
    container: {
      minHeight: "100vh",
      padding: "0 0.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  const { theme } = useTheme();
  return (
    <div className={`themed-container ${theme}`} style={style.container}>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      <SideBar />
      <Portfolio />
      <motion.div
        className="container"
        variants={attributes}
        style={{ padding: "4rem" }}
        initial="hidden"
        animate="visible"
      >
        <Experience />
      </motion.div>
      <Footer />
    </div>
  );
}

export default portfolio;
