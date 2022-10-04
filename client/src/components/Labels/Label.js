import React from 'react';

function Label({ label }) {
    return (
        <div className='w-100 d-flex flex-row justify-content-between'>
            <div className='d-flex flex-row align-items-center' style={{ marginRight: "150px" }}>
                <div className='label-pill me-1' style={{ backgroundColor: label.color ?? '#f9c74f' }}></div>
                <h3 className='fs-5 m-0'>{label.type}</h3>
            </div>
            <h3 className='fs-5 fw-bold'>{label.percent}%</h3>
        </div>
    );
}

export default Label;