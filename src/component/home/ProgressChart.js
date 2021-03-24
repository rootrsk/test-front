import React from 'react'
import Chart from 'react-google-charts'

function ProgressChart(props) {
    return (
        <div>
            <Chart
                width={'300px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Work', 10],
                    ['Eat', 20]
                ]}
                options={{
                    title: props.title,
                    // Just add this option
                    pieHole: 0.9,
                    pieSliceBorderColor: 'none',
                    colors: ['green', 'grey'],
                    marginTop: 30,
                    legend: {
                        position: 'top',
                        textStyle: {
                            color: 'blue',
                            fontSize: 16,
                            marginBottom: 30
                        }
                    }, 
                    pieSliceText: 'red',
                    
                
                }}
                rootProps={{ 'data-testid': '0' }}
            />
        </div>
    )
}

export default ProgressChart
