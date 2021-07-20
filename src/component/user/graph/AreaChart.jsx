import React from 'react'
import Chart from "react-apexcharts";

function AreaChart(props) {
    const series= [{
        name: props.name,
        data: props.data
    }]
    const options = {
        chart: {
            zoom: {
                enabled: false
            },
            animations: {
                easing: "linear",
                dynamicAnimation: {
                    speed: 500
                }
            }
        },
        tooltip: {
            // x: {
            //     format: "yyyy/MM/dd HH:mm:ss.f"
            // }
        },
        xaxis: {
            type: props.type,
            categories:props.category,
            title:{
                text:props.Xlabel
            }
            // range: 50
        },
        yaxis: {
            // labels: {
            //     formatter: val => val.toFixed(0)
            // },
            title: { text: props.Ylabel}
        }
    };
    console.log(props)
    return (
        <Chart type="area" options={options} series={series} height={300} />
    )
}

export default AreaChart
