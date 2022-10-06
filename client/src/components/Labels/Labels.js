import React from 'react';
import Label from './Label';
import apiSlice from '../../store/apiSlice';
import { getLabels } from '../../helper/helper';

function Labels() {
    const { data, isFetching, isSuccess, isError } = apiSlice.useGetLabelsQuery();
    let Transactions;

    if (isFetching) {
        Transactions = <div>Fetching</div>;
    } else if (isSuccess) {
        Transactions = getLabels(data, 'type').map((label, index) => <Label label={label} key={index} />);
    } else if (isError) {
        Transactions = <div>Error</div>;
    }

    return (
        <div className='d-flex flex-column align-items-start'>
            {Transactions}
        </div>
    );
}

export default Labels;