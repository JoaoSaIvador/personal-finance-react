import React from 'react';
import Label from './Label';

const labels = [
    {
        type: "Savings",
        color: '#f9c74f',
        percent: 45
    },
    {
        type: "Investment",
        color: 'rgb(54, 162, 235)',
        percent: 20
    },
    {
        type: "Expense",
        color: 'rgb(255, 99, 132)',
        percent: 10
    },
];

function Labels() {
    return (
        <div className='d-flex flex-column align-items-start'>
            {
                labels.map((label, index) => <Label label={label} key={index} />)
            }
        </div>
    );
}

export default Labels;