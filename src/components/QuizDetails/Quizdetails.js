import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const Quizdetails = () => {

    const question = useLoaderData().data;
    console.log(question);
    const { id, name, total, questions } = question;

    return (
        <div className='container'>

            <div className='quizdetails-container'>
                <div className='quizdetails-heading'>
                    <h2>Ice Breaking Session</h2>
                    <h3>Session/Quiz Topic : {name}</h3>
                    <h4>Total number of quiz : {total}</h4>
                </div>
                {
                    questions?.map((question, idx) => <Question
                        key={question.id}
                        question={question}
                        index={idx}
                    ></Question>)
                }
            </div>

        </div>
    );
};

export default Quizdetails;