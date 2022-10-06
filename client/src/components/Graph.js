import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Labels from './Labels/Labels';
import apiSlice from '../store/apiSlice';
import { chartData, getTotal } from '../helper/helper';

Chart.register(ArcElement);

function Graph() {
    const { data, isFetching, isSuccess, isError } = apiSlice.useGetLabelsQuery();
    let graphData;

    if (isFetching) {
        graphData = <div>Fetching</div>;
    } else if (isSuccess) {
        graphData = <Doughnut {...chartData(data)}></Doughnut>;
    } else if (isError) {
        graphData = <div>Error</div>;
    }

    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='d-flex flex-column justify-content-start align-items-center position-relative mb-5'>
                {graphData}
                <h3 className='chart-title mx-auto position-absolute fs-5'>
                    Total
                    <span className='d-block fs-3 fw-bold' style={{ color: "#50C878" }}>{getTotal(data) ?? 0}$</span>
                </h3>
            </div>
            <div className='d-flex flex-column justify-content-start align-items-center'>
                <Labels />
            </div>
        </div>
    );
}

export default Graph;