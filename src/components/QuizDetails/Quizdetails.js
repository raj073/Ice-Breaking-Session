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

            <div className='quiz-container'>
                <h3>Quiz of : {name}</h3>
                <p>Total number of quiz : {total}</p>
                {
                    questions.map((question, idx) => <Question
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