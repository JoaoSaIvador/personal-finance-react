import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import History from './History/History';
import apiSlice from '../store/apiSlice';

function CreateTransaction() {
    const [transaction, setTransaction] = useState({
        name: '',
        type: 'Bills',
        amount: ''
    });

    const [createTransaction] = apiSlice.useCreateTransactionMutation();
    const { data, isSuccess } = apiSlice.useGetCategoriesQuery();
    let categories;

    if (isSuccess) {
        categories = data.map(category => <option value={category.name} key={category._id}>{category.name}</option>);
    }

    const handleSubmit = async e => {

        e.preventDefault();
        console.log(transaction);
        if (transaction.name === '' || transaction.amount === '') {
            return {};
        }

        await createTransaction(transaction).unwrap();

        setTransaction({
            name: '',
            type: 'Bills',
            amount: ''
        });
    };

    return (
        <div className='w-100 d-flex flex-column align-items-center' style={{ maxWidth: "350px" }}>
            <h2 className='mb-4 fs-4' style={{ textAlign: "center" }}>Transaction</h2>
            <Form className='w-100 d-flex flex-column justify-content-center align-items-center mb-5' onSubmit={handleSubmit}>
                <Form.Control type="text" value={transaction.name} name="name" placeholder="Groceries" className='mb-3' onChange={e => setTransaction({ ...transaction, name: e.target.value })} />
                <Form.Select className='mb-3' value={transaction.type} name="type" onChange={e => setTransaction({ ...transaction, type: e.target.value })}>
                    {
                        categories
                    }
                </Form.Select>
                <Form.Control type="number" value={transaction.amount} name="amount" placeholder="Amount" className='mb-3' onChange={e => setTransaction({ ...transaction, amount: e.target.value })} />

                <Button variant="dark" type="submit" style={{ maxWidth: "100px", width: "100px" }}>
                    Create
                </Button>
            </Form>
            <History />
        </div>
    );
}

export default CreateTransaction;