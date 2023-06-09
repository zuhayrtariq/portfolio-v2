import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import emotion from '../../Assets/Projects/emotion.png';

import uniboard from '../../Assets/Projects/uniboard.png';

import cinemate from '../../Assets/Projects/cinemate.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={uniboard}
              isBlog={false}
              title='Uniboard'
              description='Built A University Management System that deals with all the routine tasks performed by Students, Faculty, Administrators and Head of Departments. Main technologies used were NodeJS, ExpressJS, EJS, MySQL'
              ghLink='https://github.com/zuhayrtariq/FYP'
              demoLink='uniboardfyp.cyclic.app'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={cinemate}
              isBlog={false}
              title='Cinemate Movie App'
              description='A React Application built with the help of TMDB API. The App allows you to search for a movie and check the rating and the details. Allows user to toggle dark and light mode aswell.'
              ghLink='https://github.com/zuhayrtariq/cinemate-app'
              demoLink='https://cinemate-f2ojoomp8-zuhayrtariq.vercel.app/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title='Face Recognition and Emotion Detection'
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink='https://github.com/zuhayrtariq/AI_Lab_Project/'
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          {/* <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title='Editor.io'
              description='Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage'
              ghLink='https://github.com/soumyajit4419/Editor.io'
              demoLink='https://editor.soumya-jit.tech/'
            />
          </Col> */}

          {/* <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title='Plant AI'
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink='https://github.com/soumyajit4419/Plant_AI'
              demoLink='https://plant49-ai.herokuapp.com/'
            />
          </Col> */}

          {/* <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title='Ai For Social Good'
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink='https://github.com/soumyajit4419/AI_For_Social_Good'
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
