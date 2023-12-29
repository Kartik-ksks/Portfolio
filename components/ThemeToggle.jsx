// Example toggle button
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </div>
  );
}
