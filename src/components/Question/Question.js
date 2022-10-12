import React from 'react';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Question = ({ question, index }) => {

    const options = question.options;



    return (
        <div className='question-cart'>
            <h4 className='question'>Quiz - {parseInt(index) + 1}: {question.question} </h4>
            <span className='eyeIcon'>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </span>
            <div className='question-options'>
                {
                    options?.map(option => <div className='option'>
                        <input type="radio" name="" />
                        <span className='option-text'>{option}</span>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Question;