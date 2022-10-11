import React from 'react';

const Quiz = ({ quiz }) => {


    const { name, logo, total } = quiz;

    return (
        <div>


            <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 py-3 gy-3 align-items-start'>

                <div className="col">
                    <div className="card h-100 rounded-0 border-0 bg-dark">
                        <img src={logo} className="card-img-top" alt="Session_image" />
                        <div className="card-body bg-dark">
                            <h5 id="lionelMessiText" class="card-title fw-bold text-white text-center">
                                {name}</h5>
                            <p class="card-text text-white-50 fs-6 text-center">
                                Total Session: {total}
                            </p>
                        </div>
                        <button className="btn btn-block btn-primary border-0 fw-semibold rounded-0 mx-4 mb-3">START SESSION</button>
                    </div>
                </div>

            </div>


        </div>




    );
};

export default Quiz;