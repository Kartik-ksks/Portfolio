import Head from "next/head";
import styles from "../styles/Home.module.css";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar.jsx";
import SideBar from "../components/Sidenav.jsx";
import Footer from "../components/Footer.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useTheme } from "next-themes";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faTruck,
  faFile,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faFacebook,
  faLinkedin,
  faEnvelope,
  faGithub,
  faTruck,
  faFile,
  faCrown
);

export default function Home() {
  const { theme } = useTheme();
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

  return (
    <div className={`themed-container ${theme}`} style={style.container}>
      <Head>
        <title>Kartik Seth portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <TypeAnimation
          sequence={[
            {
              text: "Hi, my name is \nKartik Seth.",
              style: { fontFamily: "Fantasy", fontSize: "4rem" },
            },
            {
              text: "I'm a Developer",
              style: { color: "#764e56", fontSize: "3rem" },
            },
          ]}
          speed={50}
          repeat={Infinity}
        />
      </main>
      <SideBar />
      <Footer />
    </div>
  );
}
