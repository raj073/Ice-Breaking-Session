import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';

const Statistics = () => {

    const quiz = useLoaderData().data;
    console.log(quiz)
    const { name, total } = quiz;

    return (
        <div className='container mt-5'>

            <h1 className='mb-5 ms-5'>Session/Quiz Name vs Total Quiz Chart: </h1>

            <div className='chart-container'>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart width={700} height={500} data={quiz}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>

            </div>


        </div>
    );
};

export default Statistics;