import React from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

function Transaction({ transaction }) {
    const border = {
        borderRight: `8px solid ${transaction.color}`,
        borderRadius: "5px",
    };

    return (
        <div className='custom-transaction w-100 bg-light d-flex flex-row justify-content-start align-items-center my-2 px-3' style={border}>
            <DeleteIcon style={{ color: transaction.color }} />
            <div className='w-100 d-flex flex-row justify-content-center'>
                {transaction.type}
            </div>
        </div>
    );
}

export default Transaction;