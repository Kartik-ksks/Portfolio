import React from 'react';
import { motion } from 'framer-motion';
import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../styles/Cardcomponent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faFile } from '@fortawesome/free-solid-svg-icons';

export default function CardComponent(props) {
  const childVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const { project } = props;
  const { tags, codeLink  } = project;
  return (
    <Col sm="12" md="6" lg="6" style={{ display: 'block'}}>
      <motion.span variants={childVariants}>
        <div  className={styles.main} >
          <Card style={{padding:'3em'}}>
            <div>
            </div>
            <span style={{ color: 'var(--fontColor)', marginLeft: '10px', fontSize:'2rem' }}>{project.name}</span>
            <div style={{ fontSize: '1rem', margin: '12px', color: 'var(--secondary)' }}>{project.description}</div>
            <div style={{ margin: '10px 10px 0 10px', fontSize: '0.95rem', color: 'var(--subsecondary)' }}>
              {
                tags ? tags.map((tag) => <span key={tag}>{`${tag}\t`}</span>) : <span />
              }
            </div>
             <div style={{ margin: '0 10px 10px 10px', float: 'right' }}>
              {codeLink
                ? (
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    <span className="material-icons" style={{ fontSize: '1.8rem', color: 'var(--subsecondary)' }}>
                      source
                    </span>
                  </a>
                )
                : <span />}
              </div>
          </Card>
        </div>
      </motion.span>
    </Col>
  );
}
