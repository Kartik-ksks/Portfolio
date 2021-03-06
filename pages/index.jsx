import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TextAnimation from 'react-animate-text';
import Navbar from '../components/Navbar.jsx';
import SideBar from '../components/Sidenav.jsx';
import Footer from '../components/Footer.jsx';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTruck, faFile, faCrown } from '@fortawesome/free-solid-svg-icons';
library.add(faFacebook, faLinkedin, faEnvelope, faGithub, faTruck, faFile, faCrown);


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Kartik Seth portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
      <main className={styles.main}>
        <span style={{color: "gray", fontSize:'2rem'}}>  Hi, my name is </span>
        <TextAnimation charInterval={100}>
      <span className={styles.title} style={{fontfamily:"Fantasy", fontsize:"4rem"}}>Kartik Seth.</span>
        <span style={{color: "#764e56", fontSize:'3rem'}}>I am a frontend developer.</span>
        </TextAnimation>
      </main>
      <SideBar/>
      <Footer />
    </div>
  )
}
