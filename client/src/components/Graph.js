import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Labels from './Labels/Labels';

Chart.register(ArcElement);

const config = {
    data: {
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 10
        }],
    },
    options: {
        cutout: 115
    }
};

function Graph() {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='d-flex flex-column justify-content-start align-items-center position-relative mb-5'>
                <Doughnut {...config}></Doughnut>
                <h3 className='chart-title mx-auto position-absolute fs-5 fw-bold'>
                    Total
                    <span className='d-block fs-3'>${0}</span>
                </h3>
            </div>
            <div className='d-flex flex-column justify-content-start align-items-center'>
                <Labels />
            </div>
        </div>
    );
}

export default Graph;