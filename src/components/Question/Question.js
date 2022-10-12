import React from 'react';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-toastify/dist/ReactToastify.css';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';

const Question = ({ question, index }) => {

    const options = question.options;

    const clickOptionEventHandler = (option) => {
        if (option === question.correctAnswer) {
            toast.success('Your Answer is Correct');
        }
        else {
            toast.warning('Your Answer is wrong');
        }
    }

    const clickFontAwesomeRightAnswer = () => {
        toast.info(question.correctAnswer);
    }


    return (
        <div className='question-cart'>
            <h4 className='question'>Quiz - {parseInt(index) + 1}: {question.question} </h4>
            <span className='eyeIcon' onClick={clickFontAwesomeRightAnswer}>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </span>
            <div className='question-options'>
                {
                    options.map(option => <div>
                        <div className='option' onClick={() => clickOptionEventHandler(option)}>
                            <input type="radio" name="" id="" />
                            <span className='option-text'>{option}</span>
                        </div>
                        <ToastContainer
                            autoClose={1500}
                            closeOnClick
                            pauseOnHover={false}
                            hideProgressBar={true}
                        />
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Question;