import { MenuItem, TextField } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchTests } from "../../store/actions/tests"
import Header from "./Header"
import TestTemplate from "./TestTemplate"

function Tests(props) {
    const [tests,setTest] = useState(null)
    const getTest = async() =>{
        const response = await axios({
            url : `/v2/tests`,
            method:'get',
            data: {}
        }) 
        if(response.data.status==='success'){
            setTest(response.data.tests)
        }
        console.log(response.data)
    }
    useEffect(()=>{
        fetchTests()
    },[])
    return (
        <div>
            {/* <TextField
                className='input'
                select
                value={classOption}
                label= 'Class'
                // disabled = {disabled}
                variant='outlined'
                helperText="Please select correct option"
                onChange={(e)=>setClassOption(e.target.value)}>
                    {
                        classOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                    }
            </TextField>
            <TextField
                className='input'
                select
                value={classOption}
                label= 'Stream'
                // disabled = {disabled}
                variant='outlined'
                helperText="Please select correct option"
                onChange={(e)=>setClassOption(e.target.value)}>
                    {
                        streamOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                    }
            </TextField> */}
            <Header />
            <div className="tests">
                {props.tests.test &&
                    props.tests.test.map((test)=> <TestTemplate {...test} key={test._id} />)
                }
            </div>
            
        </div>
    )
}
const mapStateToProps = state => state

export default connect(mapStateToProps) (Tests)
