import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi There, I'm <span className='purple'>Zuhayr Tariq </span>
            <br />
            A Computer Science Student eager to learn and develop myself in the
            field of technology. Capable of working with various technologies
            and softwares.
            <br />
            <br />
            I'm a highly motivated individual who is always willing to strive in
            order to gain knowledge. I have completed multiple online courses
            that helped me in learning the following technologies:{' '}
            <span className='purple'>
              Javascript, NodeJS, ReactJS, MySQL, Git and NextJS
            </span>
            <br />
            <br />
            Apart from Programming, I am also passionate about
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Mixed Martial Arts
            </li>
            <li className='about-activity'>
              <ImPointRight /> Cricket
            </li>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>“Knowledge is power.”</p>
          <footer className='blockquote-footer'>Francis Bacon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
