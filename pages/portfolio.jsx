import Navbar from '../components/Navbar.jsx';
import Head from 'next/head';
import Experience from '../components/Experience.jsx';
import { motion } from 'framer-motion';
import Portfolio from '../components/Portfolio.jsx';
import SideBar from '../components/Sidenav.jsx';

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
