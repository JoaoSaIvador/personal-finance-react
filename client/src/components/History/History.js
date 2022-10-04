import React from 'react';
import Transaction from './Transaction';

const transactions = [
    {
        type: "Savings",
        color: '#f9c74f',
    },
    {
        type: "Investment",
        color: 'rgb(54, 162, 235)',
    },
    {
        type: "Expense",
        color: 'rgb(255, 99, 132)',
    },
];

function History() {
    return (
        <>
            <h2 className='mb-4 fs-4' style={{ textAlign: "center" }}>History</h2>

            {
                transactions.map((transaction, index) => <Transaction transaction={transaction} key={index} />)
            }
        </>
    );
}

export default History;