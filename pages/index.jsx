import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar.jsx";
import SideBar from "../components/SideBar.jsx";
import Intro from "../components/Intro.jsx";
import Footer from "../components/Footer.jsx";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    theme !== "system"?
    setTheme(theme):
    setTheme("light")
  }, [setTheme]);

  return (
    <div className={`themed-container ${theme}`}>
      <Head>
        <title>Kartik Seth portfolio</title>
      </Head>
      <Navbar />
      <SideBar />
      <Intro />
      <Footer />
    </div>
  );
}
