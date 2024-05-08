import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to handle screen size changes
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set initial theme based on user preference or system preference
    setIsDarkMode(theme === "dark");
  }, [theme]);

  useEffect(() => {
    handleResize(); // Check screen size on initial render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme preference to localStorage
  };

  useEffect(() => {
    // Ensure the theme is set based on localStorage on initial render
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setIsDarkMode(savedTheme === "dark");
    }
  }, [setTheme]);

  return (
    <div
      className={`dark-mode-toggle ${isDarkMode ? "dark" : ""}`}
      onClick={toggleDarkMode}
    >
      <div className={`toggle-switch ${isDarkMode ? "on" : "off"}`}>
        <div className="slider" />
      </div>
      <span>{!isSmallScreen && (isDarkMode ? "Light Mode" : "Dark Mode")}</span>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      <style jsx>{`
        .dark-mode-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .toggle-switch {
          width: 40px;
          height: 20px;
          background-color: #ccc;
          border-radius: 25px;
          position: relative;
          margin-right: 10px;
          display: flex;
          align-items: center;
          padding: 2px;
        }

        .slider {
          width: 16px;
          height: 16px;
          background-color: white;
          border-radius: 50%;
          transition: transform 0.3s ease;
          transform: translateX(${isDarkMode ? "20px" : "0"});
        }

        .toggle-switch.on {
          background-color: #5cb85c; /* green */
        }

        .toggle-switch.off {
          background-color: #d9534f; /* red */
        }

        span {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}
