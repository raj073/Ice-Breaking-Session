import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg'
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
                        className="d-block w-100 rounded"
                        src={image1}
                        alt="MCQ Quiz Exam"
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark fw-bold'>Ice Breaking Session</h3>
                        <p className='text-dark fw-bold'> An icebreaker is a facilitation exercise intended to help members of a group begin the process of forming themselves into a team. Icebreakers are commonly presented as a game to "warm up" the group by helping the members to get to know each other.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={image2}
                        alt="MCQ Quiz Exam"
                    />
                    <Carousel.Caption>
                        <h3 className='text-white fw-bold'>React</h3>
                        <p className='text-white fw-bold'> React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={image3}
                        alt="Rubik's Cube"
                    />

                    <Carousel.Caption>
                        <h3 className='text-white fw-bold'>Javascript</h3>
                        <p className='text-white fw-bold'>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={image4}
                        alt="Standardized Test"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark fw-bold'>CSS</h3>
                        <p className='text-dark fw-bold'>
                            Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 rounded"
                        src={image5}
                        alt="Working as a Team"
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark fw-bold'>GIT</h3>
                        <p className='text-dark fw-bold'>Git is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. </p>
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