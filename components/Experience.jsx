import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { experiences } from '../Data/experience';

export default function Experience() {
  return (
    <div className="section-container">
      <div className="experience">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="experience-header">
                <div className="experience-info">
                  <div className="experience-title">
                    <span className="experience-icon">
                      <FontAwesomeIcon icon={faBriefcase} />
                    </span>
                    {exp.position}
                  </div>
                  <div className="experience-company">
                    <span className="experience-icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </span>
                    {exp.title}
                  </div>
                </div>
                <div className="experience-date">
                  <span className="experience-icon">
                    <FontAwesomeIcon icon={faCalendar} />
                  </span>
                  {exp.date}
                </div>
              </div>

              <div className="experience-description">
                <ul>
                  {exp.description.map((desc, descIndex) => (
                    <motion.li
                      key={descIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (descIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {desc}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Experience Timeline Indicator */}
              <div className="experience-timeline">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Experience Highlights */}
        <motion.div
          className="experience-highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Key Achievements</h3>
          <div className="highlights-grid">
            <motion.div
              className="highlight-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="highlight-number">$10M</div>
              <div className="highlight-text">Deal Secured</div>
            </motion.div>

            <motion.div
              className="highlight-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="highlight-number">11</div>
              <div className="highlight-text">Recognition Badges</div>
            </motion.div>

            <motion.div
              className="highlight-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="highlight-number">100%</div>
              <div className="highlight-text">Test Automation</div>
            </motion.div>

            <motion.div
              className="highlight-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="highlight-number">2+</div>
              <div className="highlight-text">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
