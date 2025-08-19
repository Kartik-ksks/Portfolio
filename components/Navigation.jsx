import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navigation({ sections, currentSection, setCurrentSection, theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.nav
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* <motion.a
          href="#home"
          className="nav-logo"
          onClick={() => handleSectionClick('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Kartik Seth
        </motion.a> */}

        <ul className="nav-links">
          {sections.map((section) => (
            <motion.li key={section.id}>
              <motion.a
                href={`#${section.id}`}
                className={`nav-link ${currentSection === section.id ? 'active' : ''}`}
                onClick={() => handleSectionClick(section.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon 
            icon={theme === 'light' ? faMoon : faSun} 
            size="lg"
          />
        </motion.button>
      </div>
    </motion.nav>
  );
}
