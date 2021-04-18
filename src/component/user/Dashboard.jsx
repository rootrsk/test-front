import { Button, Divider, Paper, Typography } from "@material-ui/core";
import axios from "axios"
import { useEffect, useState } from "react"
import Chart from "react-google-charts"
import { connect } from "react-redux"
import useWindowDimensions from '../../utils/Dimension'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

function Dashboard(props) {
    // console.log(props)
    const [marks,setMarskChart] = useState(null)
    const [accuracy,setAccuracy] = useState(null)
    const [data,setData] = useState(null)
    const [counts,setCount] = useState(null)
    const { height, width }  = useWindowDimensions()
    const [activity,setActivity] = useState(null)
    const daysInMonth = new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate();
    const fetchDashboardDEtails = async() =>{
        const response  = await axios({
            url:'/user/dashboard',
            method:'post'
        })
        if(response.data.status==='success'){
            const marksData = await response.data.charts.marks.map((data,index)=>{
                return [index,data]
            })
            const accuracyData = await response.data.charts.accuracy.map((data,index)=>{
                return {name: index.toString(),uv:data}
            })
            const marksdata = await response.data.charts.marks.map((data,index)=>{
                return { name: 'A' + index.toString(), uv:data }
            })
            setMarskChart(marksData)
            setAccuracy(accuracyData)
            setData(marksdata)
            const currentDate = new Date()
            const activityData = await new Array(currentDate.getDate()+1).fill(null).map((data,index)=>({name:index,act:0}))
            await response.data.charts.activity.map((data,index)=>{
                    const day = new Date(data).getDate()
                    activityData[day].act = activityData[day].act+1
                    return
            })
            setActivity(activityData)
            console.log(activityData)
            setCount(response.data)
        }
        console.log(response.data)
    }
    useEffect(()=>{
        fetchDashboardDEtails()
    },[])
    return (
        <div>
            {counts && 
                <div className="flex-box_between">
                    <div className="user-statics">
                        <div className="basic-deatils_box-container">
                            <div className="details-number">
                                {counts.total_tests}
                            </div>
                            <div className="details-title">
                                Total Tests
                            </div>
                        </div>
                        <div className="basic-deatils_box-container">
                            <div className="details-number">
                                {counts.total_attemps}
                            </div>
                            <div className="details-title">
                                Total Attempts
                            </div>
                        </div>
                        <div className="basic-deatils_box-container">
                            <div className="details-number">
                                30
                            </div>
                            <div className="details-title">
                                Compelted tests
                            </div>
                        </div>
                        <div className="basic-deatils_box-container">
                            <div className="details-number">
                                30
                            </div>
                            <div className="details-title">
                                My  tests
                            </div>
                        </div>
                    </div>
                    <div className="user-activity">
                        <div className="user-activity_chart">
                            <div>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <h2>Activity</h2>
                                    <Button color='primary' variant='contained'>Monthly</Button>
                                </div>
                                
                                <Divider style={{margin:'10px 0px 10px 0px'}}/>
                            </div>
                            {activity && 
                                <div className="chart-container">
                                    <ResponsiveContainer>
                                        <BarChart
                                            data={activity}
                                            style={{backgrond:'white'}}
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: -30,
                                                bottom: 0
                                            }}
                                            >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="act" fill="#8884d8" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
            <div className='charts-container' >
            {/* {accuracy && 
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Accuracy', 'Accuracy'],...accuracy,
                    ]}
                    options={{
                        curveType: 'function' ,
                        backgroundColor: '#f1f8e9',
                        curveType: 'function' ,
                        animation:{
                            "startup": true,
                            duration: 1000,
                            easing: 'linear',
                        } 
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
                */}
                
            <div className="accuracy-chart">
                <div>
                    <h2>Performance</h2>
                    <Divider style={{margin:'10px 0px 10px 0px'}}/>
                </div>
                {data && 
                    <div className='chart-container'>
                        <ResponsiveContainer>
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 0,
                                    left: -30,
                                    bottom: 0
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                }
            </div>
            <div className="accuracy-chart">
                <div>
                    <h2>Accuray</h2>
                    <Divider style={{margin:'10px 0px 10px 0px'}}/>
                </div>
                
                {accuracy && 
                    <div className='chart-container'>
                        <ResponsiveContainer>
                            <AreaChart
                                data={accuracy}
                                style={{backgrond:'white'}}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: -30,
                                    bottom: 0
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                }
            </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => state
export default connect(mapStateToProps) (Dashboard)
