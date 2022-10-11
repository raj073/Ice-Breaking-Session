import React from 'react';

const Question = ({ question, index }) => {

    const options = question.options;

    return (
        <div className='question-cart'>
            <h4 className='question'>Quiz {parseInt(index) + 1}: {question.question} </h4>
            <div className='question-options'>
                {
                    options.map(option => <div className='option'>
                        <input type="radio" name="" id="" />
                        <span className='option-text'>{option}</span>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Question;