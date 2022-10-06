import React from 'react';
import Transaction from './Transaction';
import apiSlice from '../../store/apiSlice';

function History() {
    const { data, isFetching, isSuccess, isError } = apiSlice.useGetLabelsQuery();
    const [deleteTransaction] = apiSlice.useDeleteTransactionMutation();
    let Transactions;

    const handleDelete = async (id) => {
        await deleteTransaction({ id: id }).unwrap();
    };

    if (isFetching) {
        Transactions = <div>Fetching</div>;
    } else if (isSuccess) {
        Transactions = data.map((transaction, index) => <Transaction transaction={transaction} key={index} handleDelete={handleDelete} />);
    } else if (isError) {
        Transactions = <div>Error</div>;
    }

    return (
        <>
            <h2 className='mb-4 fs-4' style={{ textAlign: "center" }}>History</h2>

            {
                Transactions
            }
        </>
    );
}

export default History;