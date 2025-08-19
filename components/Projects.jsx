import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';
import { projects } from '../Data/projects';

export default function Projects() {
  // Enhanced project data with additional details
  const enhancedProjects = [
    {
      ...projects[0],
      image: "🛒",
      liveLink: "https://ecommerce-demo.com",
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Integration"],
      status: "Completed"
    },
    {
      ...projects[1],
      image: "💼",
      liveLink: "https://portfolio-demo.com",
      features: ["Responsive Design", "Dark/Light Theme", "Smooth Animations", "Contact Form"],
      status: "Completed"
    },
    // Additional projects to showcase more work
    {
      name: "Task Management App",
      image: "📋",
      color: "#FF6B6B",
      description: "A collaborative task management application with real-time updates and team features",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      codeLink: "https://github.com/Kartik-ksks",
      liveLink: "https://task-app-demo.com",
      features: ["Real-time Updates", "Team Collaboration", "Task Prioritization", "Progress Tracking"],
      status: "In Progress"
    },
    {
      name: "Weather Dashboard",
      image: "🌤️",
      color: "#4ECDC4",
      description: "Interactive weather dashboard with location-based forecasts and beautiful visualizations",
      tags: ["React", "Weather API", "Chart.js", "Geolocation"],
      codeLink: "https://github.com/Kartik-ksks",
      liveLink: "https://weather-demo.com",
      features: ["Location Detection", "5-Day Forecast", "Interactive Charts", "Weather Alerts"],
      status: "Completed"
    }
  ];

  return (
    <div className="section-container">
      <div className="projects">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="projects-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A collection of projects that showcase my skills in full-stack development, 
          user experience design, and innovative problem-solving.
        </motion.p>

        <div className="projects-grid">
          {enhancedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="project-image"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}
              >
                <span style={{ fontSize: '4rem' }}>{project.image}</span>
                <div className="project-status">{project.status}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="project-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (tagIndex * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faGithubBrand} />
                    Code
                  </motion.a>
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Interested in working together?</h3>
          <p>Let's discuss your next project and bring your ideas to life.</p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
