import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Hero({ setCurrentSection }) {
  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="section-container">
      <div className="hero">
        {/* Organic Background Shapes */}
        <div className="organic-shape shape-1"></div>
        <div className="organic-shape shape-2"></div>
        <div className="organic-shape shape-3"></div>

        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi! My name is
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Kartik Seth
          </motion.h1>

          <motion.div
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I am a{' '}
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Software Engineer',
                2000,
                'Problem Solver',
                2000,
                'Creative Thinker',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: 'var(--text-accent)', fontWeight: 600 }}
            />
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting digital experiences with code, creativity, and a passion for innovation. 
            I build solutions that bridge the gap between imagination and reality, 
            creating seamless user experiences that make a difference.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="https://github.com/Kartik-ksks"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kartik--seth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            <motion.a
              href="mailto:kartikciphering@gmail.com"
              className="hero-social-link"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
