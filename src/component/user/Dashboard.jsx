import { Button, Divider, Paper, Typography } from "@material-ui/core";
import axios from "axios"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import AreaChart from './graph/AreaChart'
import useWindowDimensions from '../../utils/Dimension'
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

function Dashboard(props) {
    // console.log(props)
    const [marks,setMarskChart] = useState(null)
    const [accuracy,setAccuracy] = useState(null)
    const [data,setData] = useState(null)
    const [counts,setCount] = useState(null)
    const { height, width }  = useWindowDimensions()
    const [activity,setActivity] = useState(null)
    const [month,setMonth] = useState(null)
    
    const fetchDashboardDEtails = async() =>{
        const response  = await axios({
            url:'/user/dashboard',
            method:'post'
        })
        if(response.data.status==='success'){
        //     const marksData = await response.data.charts.marks.map((data,index)=>{
        //         return [index,data]
        //     })
        //     const accuracyData = await response.data.charts.accuracy.map((data,index)=>{
        //         return {name: index.toString(),uv:data}
        //     })
        //     const marksdata = await response.data.charts.marks.map((data,index)=>{
        //         return { name: 'A' + index.toString(), uv:data }
        //     })
        //     setMarskChart(marksData)
        //     setAccuracy(response.data.charts.marks)
        //     setData(marksdata)
            
        //     const activityData = await new Array(currentDate.getDate()+1).fill(0)
            
            
        //     setActivity(activityData)
        //     console.log(activityData)
        //     setCount(response.data)
        // }
        // console.log(response.data)
    }}
    useEffect(()=>{
        const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        const currentDate = new Date()
        const monthDetails = new Array(currentDate.getDate() + 1).fill(0).map((data, index) => index)
        setMonth(monthDetails)
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
                        
                        </div>
                    </div>
                </div>
            }
            <div className='charts-container' >
    
                
                <div className="accuracy-chart">
                    <div>
                        <h2>Performance</h2>
                        <Divider style={{margin:'10px 0px 10px 0px'}}/>
                    </div>
                </div>
                <div className="accuracy-chart">
                    <div>
                        <h2>Accuray</h2>
                        <Divider style={{margin:'10px 0px 10px 0px'}}/>
                    </div>

                    {accuracy &&
                        <div className='chart-container'>
                                <AreaChart
                                    data={accuracy}
                                    type='numeric'
                                >
                                </AreaChart>
                        </div>
                    }
                </div>
                <div className="accuracy-chart">
                    <div>
                        <h2>Activity</h2>
                        <Divider style={{ margin: '10px 0px 10px 0px' }} />
                    </div>
                    
                    {props.auth.user && props.auth.user.charts &&
                        <div className='chart-container'>
                            <AreaChart
                                data={props.auth.user.charts.activity}
                                type='category'
                                categories={month}
                                Ylabel='Tests'
                                Xlabel='Days'
                                name='Tests'
                            >
                            </AreaChart>
                        </div>
                    }
                </div>
                <div className="accuracy-chart">
                    <div>
                        <h2>Performance</h2>
                        <Divider style={{ margin: '10px 0px 10px 0px' }} />
                    </div>

                    {props.auth.user && props.auth.user.charts &&
                        <div className='chart-container'>
                            <AreaChart
                                data={props.auth.user.charts.marks}
                                type='category'
                                categories={month}
                            >
                            </AreaChart>
                        </div>
                    }
                </div>
                <div className="accuracy-chart">
                    <div>
                        <h2>Performance</h2>
                        <Divider style={{ margin: '10px 0px 10px 0px' }} />
                    </div>

                    {props.auth.user && props.auth.user.charts &&
                        <div className='chart-container'>
                            <AreaChart
                                data={props.auth.user.charts.accuracy}
                                type='category'
                                category={month}
                                name='tests'
                            >
                            </AreaChart>
                        </div>
                    }
                </div>
                
            </div>
        </div>
    )
}
const mapStateToProps = (state) => state
export default connect(mapStateToProps) (Dashboard)
