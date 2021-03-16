import { projects } from '../Data/projects.jsx';
import CardComponent from '../components/Cardcomponent.tsx';
import { motion } from 'framer-motion';
import styles from '../styles/Cardcomponent.module.css';

export default function Portfolio(){
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
			  <div className={styles.container}>
			    <div >
			      <div className="portfolio-wrapper">

                <motion.div className="container" variants={attributes} style={{padding:'4rem'}}initial="hidden" animate="visible">
                <h1 style={{ color: 'var(--secondary)', fontSize: '3rem', marginBottom: '30px' }}>Projects</h1>
                  {projects.map((project) => (
                    <CardComponent project={project} key={project.name} />
                  ))}
                </motion.div>
			      </div>
		      </div>
	      </div>
		</>
	);
}
