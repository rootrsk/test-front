import React from 'react'
import Chart from 'react-google-charts'

function ProgressChart(props) {
    return (
        <div>
            <div className="marks">
                <Chart
                    width={'300px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Data', 'Value'],
                        ['Covered', props.obtained],
                        ['Total', props.total-props.obtained]
                    ]}
                    options={{
                        backgroundColor:'transparent',
                        pieHole: 0.9,
                        pieSliceBorderColor: 'white',
                        colors: ['#84f54c', '#eef0ed'],
                        legend: 'none',
                        pieSliceText: 'none',
                    }}
                    rootProps={{ 'data-testid': '0' }}
                />
                <div className="title">
                    <span>{props.title}</span>
                </div>
                <div className='per-text'>
                    <span>{Math.round((props.obtained)/(props.total)*100)}%</span>
                </div>
            </div>
            
        </div>
    )
}

export default ProgressChart
