import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {

    const quizes = useLoaderData().data;
    console.log(quizes);

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
                        <h3>Ice-Breaking Session</h3>
                        <p> Ice-breaking is an activity that is conducted when a group of unknown or semi-known or little-known people gathers in a particular place for receiving training or attending a workshop or similar purpose</p>
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
                        <p>Magic Cube, Speed Cube, Puzzle Cube, Cube <br />The Rubik's Cube is a 3-D combination puzzle originally invented in 1974 by Hungarian sculptor and professor of architecture Ernő Rubik. Originally called the Magic Cube, the puzzle was licensed by Rubik to be sold by Ideal Toy Corp in 1980 via businessman Tibor Laczi and Seven Towns founder Tom Kremer. </p>
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
                            A standardized test is a test that is administered and scored in a consistent, or "standard", manner. Standardized tests are designed in such a way that the questions and interpretations are consistent and are administered and scored in a predetermined, standard manner.
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
                        <p>A successful team is one where everyone's unique skills and strengths help the team achieve a shared goal in the most effective way. <br />Teamwork is, “The process of working collaboratively with a group of people in order to achieve a goal.Teamwork is often a crucial part of a business, as it is often necessary for colleagues to work well together, trying their best in any circumstance. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='mt-5 row row-cols-lg-4 row-cols-md-2 row-cols-1 py-3 gy-3'>

                {
                    quizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}></Quiz>)
                }

            </div>

        </div>
    );
};

export default Home;