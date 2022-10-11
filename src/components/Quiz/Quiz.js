import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Quiz = ({ quiz }) => {


    const { id, name, logo, total } = quiz;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz/${id}`)
    }

    return (
        <div>


            <div>

                <div className="col">
                    <div className="card h-100 rounded-0 border-0 bg-dark">
                        <img src={logo} className="card-img-top" alt="Session_image" />
                        <div className="card-body bg-dark">
                            <h5 className="card-title fw-bold text-white text-center">
                                {name}</h5>
                            <p class="card-text text-white-50 fs-6 text-center">
                                Total Session: {total}
                            </p>
                        </div>

                        <button onClick={handleNavigate} className="btn btn-block btn-primary border-0 fw-semibold rounded-0 mx-4 mb-3">START SESSION</button>
                    </div>
                </div>

            </div>


        </div>




    );
};

export default Quiz;