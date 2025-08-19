import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'kartikciphering@gmail.com',
      link: 'mailto:kartikciphering@gmail.com'
    },
    {
      icon: faMapMarkerAlt,
      label: 'Location',
      value: 'Bengaluru, India',
      link: null
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '+91 7718945135',
      link: 'tel:+917718945135'
    }
  ];

  const socialLinks = [
    {
      icon: faGithub,
      label: 'GitHub',
      url: 'https://github.com/Kartik-ksks',
      color: '#333'
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kartik--seth/',
      color: '#0077B5'
    },
    {
      icon: faTwitter,
      label: 'Twitter',
      url: 'https://twitter.com/kartikseth',
      color: '#1DA1F2'
    }
  ];

  return (
    <div className="section-container">
      <div className="contact">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology and innovation. Feel free to reach out!
        </motion.p>

        <div className="contact-content">
          {/* Contact Information */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Get In Touch</h3>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={info.icon} size="lg" />
                  </div>
                  <div className="contact-text">
                    <h4>{info.label}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="social-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Follow Me</h3>
                            <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      style={{ '--social-color': social.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        backgroundColor: social.color,
                        color: 'white'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="contact-social-icon">
                        <FontAwesomeIcon icon={social.icon} />
                      </span>
                      <span>{social.label}</span>
                    </motion.a>
                  ))}
                </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Start a Project?</h3>
          <p>
            Whether you have a specific project in mind or just want to explore possibilities, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
          <motion.a
            href="mailto:kartik.seth@example.com"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Made with ❤️ by Kartik Seth</p>
          <p>© 2024 All rights reserved</p>
        </motion.footer>
      </div>
    </div>
  );
}
