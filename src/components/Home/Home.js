import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {


    return (
        <div className='mt-5 container'>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="MCQ Quiz Exam"
                    />
                    <Carousel.Caption>
                        <h3>MCQ Quiz Exam</h3>
                        <p>Widely used in MCQ Examination, Surveys, Assessments and Recruitment, Optical Mark Recognition (OMR)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Rubik's Cube"
                    />

                    <Carousel.Caption>
                        <h3>Rubik's Cube</h3>
                        <p>Magic Cube, Speed Cube, Puzzle Cube, Cube</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Standardized Test"
                    />

                    <Carousel.Caption>
                        <h3>Standardized Test</h3>
                        <p>
                            A standardized test is a test that is administered and scored in a consistent, or "standard", manner
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Working as a Team"
                    />
                    <Carousel.Caption>
                        <h3>Working as a Team</h3>
                        <p>A successful team is one where everyone's unique skills and strengths help the team achieve a shared goal in the most effective way.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* <div className='mt-5'>

                {
                    quizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}></Quiz>)
                }

            </div> */}

        </div>
    );
};

export default Home;