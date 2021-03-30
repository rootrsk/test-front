import { MenuItem, TextField } from "@material-ui/core"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "./Header"
import TestTemplate from "./TestTemplate"

function Tests() {
    const [tests,setTest] = useState(null)
    const getTest = async() =>{
        const response = await axios({
            url : `/tests`,
            method:'post',
            data: {}
        }) 
        if(response.data.status==='success'){
            setTest(response.data.tests)
        }
        console.log(response.data)
    }
    const [classOption,setClassOption] = useState()
    const classOptions = [{label:'10th',value:10},{label:'12th',value:12}]
    const streamOptions = [{label:'Secondary',value:'secondary'},{label:'Arts',value:'arts'},{label:'Science',value:'science'}]
    useEffect(()=>{
        getTest()
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
                {tests &&
                    tests.map((test)=> <TestTemplate {...test} />)
                }
            </div>
            
        </div>
    )
}

export default Tests
