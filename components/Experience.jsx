import React from 'react';
import { Container } from 'react-bootstrap';

export default function Experience() {
  return (
    <>
      <Container>
        <span style={{ color: 'var(--secondary)', marginTop: '1.1em', marginBottom: '20px' }}>
          <div >
            <h2 style={{ color: 'var(--fontColor)', fontSize: '2rem' }}>Procedure Tech</h2>
            <span style={{ float: 'right', color: 'var(--subsecondary)', fontSize: '0.9rem' }}>(March 2021 - Present)</span>
          </div>
          <div style={{ color: 'var(--fontColor)', fontSize: '1.6rem' }}> Frontend Developer</div>
          <div style={{ marginTop: '1.5em', fontSize: '1.2rem' }}>
            <ul>
              <li>
                Just starting out.
              </li>
            </ul>
          </div>
        </span>
        <span style={{ color: 'var(--secondary)', marginTop: '1.1em' }}>
          <div>
            <h2 style={{ color: 'var(--fontColor)', fontSize: '2rem' }}>Formula Manipal Electric</h2>
            <span style={{ float: 'right', color: 'var(--subsecondary)', fontSize: '0.9rem' }}>
              (December 2018 – April 2020)
            </span>
          </div>
          <div style={{ color: 'var(--fontColor)', fontSize: '1.6rem' }}>Controls Engineer</div>
          <div style={{ marginTop: '1.5em', fontSize: '1.2rem' }}>
            <ul>
            <li>
              Worked in Formula Manipal Electric, which is a formula student team;
              That designs and develops a formula style race car.
            </li>
            <li>
              Developed a CAN bus system for communication between various nodes of the electric car;
              such as the Rihnehart motor controller, BMS and Central node used also for Data acquisition.
            </li>
            </ul>
          </div>
        </span>
      </Container>
    </>
  );
}
