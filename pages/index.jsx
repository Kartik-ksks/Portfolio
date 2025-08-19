import { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

// Dynamic imports for components
const SineWaveBackground = dynamic(() => import("../components/SineWaveBackground"), { ssr: false });
const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const About = dynamic(() => import("../components/About"), { ssr: false });
const Experience = dynamic(() => import("../components/Experience"), { ssr: false });
const Projects = dynamic(() => import("../components/Projects"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });
const Navigation = dynamic(() => import("../components/Navigation"), { ssr: false });
const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), { ssr: false });

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [currentSection, setCurrentSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [treeLoaded, setTreeLoaded] = useState(false);

  useEffect(() => {
    theme !== "system" ? setTheme(theme) : setTheme("light");
    // Reduce loading time and add better error handling
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setTheme]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" }
  ];

  return (
    <div className={`app ${theme || 'light'}`} suppressHydrationWarning>
      <Head>
        <title>Kartik Seth - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer Portfolio - Kartik Seth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="loading-screen"
          >
            <div className="loading-content">
              <div className="leaf-loader">
                <div className="leaf leaf-1"></div>
                <div className="leaf leaf-2"></div>
                <div className="leaf leaf-3"></div>
              </div>
              <h2>Welcome to my world</h2>
              <p>Loading nature-inspired portfolio...</p>
              <div className="loading-progress">
                <div className="loading-progress-bar"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sine Wave Background */}
      <SineWaveBackground theme={theme} />

      {/* Navigation */}
      <Navigation 
        sections={sections} 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
        theme={theme}
        setTheme={setTheme}
      />
      
      {/* Theme Toggle */}
      <ThemeToggle theme={theme} setTheme={setTheme} />

      {/* Main Content */}
      <main className="main-content">
        <section id="home" className="section">
          <Hero setCurrentSection={setCurrentSection} />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
}
