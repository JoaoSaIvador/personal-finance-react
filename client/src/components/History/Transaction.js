import React from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

function Transaction({ transaction, handleDelete }) {
    const border = {
        borderRight: `8px solid ${transaction.color}`,
        borderRadius: "5px",
    };

    return (
        <div className='custom-transaction w-100 bg-light d-flex flex-row justify-content-between align-items-center my-2 px-3' style={border}>
            <button className='bg-light' style={{ border: "none" }}><DeleteIcon style={{ color: "#212529" }} onClick={() => { handleDelete(transaction._id); }} /></button>
            <span>{transaction.name} - {transaction.amount}$</span>
            <span>{transaction.date}</span>
        </div>
    );
}

export default Transaction;