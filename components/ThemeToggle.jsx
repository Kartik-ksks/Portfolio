import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, setTheme }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="theme-toggle-floating">
        <div className="theme-toggle-placeholder"></div>
      </div>
    );
  }

  return (
    <motion.button
      className="theme-toggle-floating"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </motion.button>
  );
}
