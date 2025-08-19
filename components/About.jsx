import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faDatabase, 
  faMobile, 
  faCloud, 
  faTools, 
  faPalette,
  faRocket,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const skills = [
    { name: 'Frontend Development', icon: faCode, level: 90 },
    { name: 'Backend Development', icon: faDatabase, level: 85 },
    { name: 'Mobile Development', icon: faMobile, level: 80 },
    { name: 'Cloud & DevOps', icon: faCloud, level: 75 },
    { name: 'Tools & Frameworks', icon: faTools, level: 88 },
    { name: 'UI/UX Design', icon: faPalette, level: 70 },
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Python', 'JavaScript', 'TypeScript',
    'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Jenkins', 'Git',
    'Express.js', 'Django', 'Flask', 'GraphQL', 'REST APIs', 'Microservices'
  ];

  return (
    <div className="section-container">
      <div className="about">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I am a dedicated software developer with a keen focus on web development technologies. 
            My passion lies in creating dynamic, user-friendly web applications that deliver 
            seamless user experiences. With a strong foundation in both front-end and back-end 
            development, I am adept at translating complex requirements into robust and efficient code.
          </p>
          <p>
            My journey in software development has been marked by a commitment to continuous 
            learning and improvement. I thrive in environments that challenge me to push the 
            boundaries of my technical knowledge and skill set. Whether it's mastering the latest 
            frameworks, optimizing server-side performance, or implementing responsive design 
            principles, I am driven by a relentless pursuit of excellence.
          </p>

          {/* Skills Grid */}
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <FontAwesomeIcon icon={skill.icon} size="lg" />
                  <h4>{skill.name}</h4>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="tech-showcase">
            <h3>Technologies I Work With</h3>
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="tech-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faRocket} size="2x" />
              <h4>2+ Years</h4>
              <p>Professional Experience</p>
            </motion.div>

            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faLightbulb} size="2x" />
              <h4>10+ Projects</h4>
              <p>Completed Successfully</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
