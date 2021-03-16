import Navbar from '../components/Navbar.tsx';
import Head from 'next/head';
import Experience from '../components/Experience.tsx';
import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio.tsx';
import SideBar from '../components/Sidenav.tsx';

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
	return (
		<>
			<Head>
			  <title>Portfolio</title>
			</Head>
			<Navbar/>
      <Portfolio/>
      <motion.div className="container" variants={attributes} style={{padding:'4rem'}}initial="hidden" animate="visible">
      <h1 style={{ color: 'var(--secondary)', fontSize: '3rem', marginBottom: '30px', margintop:'5px' }}>Experience</h1>
      <Experience />
      </motion.div>

		</>
	);
}

export default portfolio;
