import { Accordion, AccordionDetails, AccordionSummary, Button, MenuItem, TextField, Typography } from '@material-ui/core'

import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import QuestionForm from './QuestionForm'
import Alert from '@material-ui/lab/Alert'
import './style.css'
import { ExpandMore } from '@material-ui/icons'

function TestForm(props) {
    console.log(props)
    const [_id,setId] = useState(props._id)
    const [title,setTitle] = useState(props.title || '')
    const [type,setType] = useState(props.type || '')
    const [type_value,setTypeValue] = useState(props.type_value || '')
    const [time,setTime] = useState(props.time || '')
    const [stream,setStream] = useState(props.stream || '')
    const [subject,setSubject] = useState(props.subject || '')
    const [standard,setStandard] = useState(props.standard || 10)
    const [questions,setQuestion] = useState(props.questions || [])
    const [correct_marking,setCmarking] = useState(1)
    const [incorrect_marking,setNmarking] = useState(0)
    const [questionForm ,setQuestonForm] = useState(false)
    let [errors,setErrors] = useState([])
    const subjectOptions = [{label: 'English',value:'english'},{label: 'Hindi',value:'hindi'},{label: 'Science',value:'science'},
        {label: 'Social Science',value:'social science'},{label: 'Mathematics', value:'mathematics'},{label: 'Physics', value: 'physics'},
        {label: 'Chemistry', value: 'chemistry'},{label: 'Biology', value: 'biology'},{lable:'General Science',value:'general science'},
        {label:'English Grammer',value:'english grammer'},{label:'History',value:'history'}]

    const typeOption = [{label:'ChapterWise',value:'chapterwise'},{label:'YearWise',value:'yearwise'},{label:'Set Wise',value:'setwise'}]
    const standardOptions = [{label: '9 Th',value: 9},{label: '10 Th',value:10},{label: '11 Th',value:11},{label: '12 Th',value: 12},{label:'General',value:13}]
    const streamOptions = [{label:'Secondary',value:'secondary'},{label:'Arts',value:'arts'},{label:'Science',value:'science'},{label:'General',value:'general'}]

    const saveQuestion = (data) => {
        console.log(data)
        if(data.index>=0){
            questions[data.index] = data
            return setQuestion(questions)
        }
        setQuestion([...questions,data])
        setQuestonForm(false)
    }
    const deleteQuestion = (index) =>{
        setQuestion(questions.filter((value,i)=>index !== i))
    }
    const data = {_id,title,type,type_value,time,stream,subject,standard,questions,correct_marking,incorrect_marking,}

    // Api Handlers
    
    const createHandler = async(data) =>{
        errors = []
        if(!title) errors.push('Title is Required.')
        if(!type) errors.push('Type  is Required')
        if(!type_value) errors.push('Type Value is Required')
        if(!time) errors.push('Time is Required.')
        if(!stream) errors.push('Stream is Reqiured.')
        if(!standard) errors.push('Standard is Reqired')
        if(!subject) errors.push('Subject is Required')
        setErrors([...errors])
        console.log(errors)
        if(errors.length>0) return
        
        const response = await axios({
            url:'/admin/test',
            method:'POST',
            data:{
                _id,title,type,type_value,time,stream,subject,standard,questions,correct_marking,incorrect_marking,
            }
        })
    }
    useEffect(() => {
        console.log(questions)
    }, []);
    
    return (
        <div>
            <Typography variant='h4' align='center'>Test Form</Typography>
            <div className="test-form">
                <TextField
                    className='input'
                    placeholder='Question'
                    required
                    label='Title'
                    value={title}
                    variant='outlined'
                    helperText="Enter title of the test"
                    onChange={(e)=>setTitle(e.target.value)}
                    // error = {errors.includes('title')}
                />
                <TextField
                
                    className='input'
                    placeholder='Question'
                    select
                    required
                    value={type}
                    label= 'Type'
                    variant='outlined'
                    helperText="Please select your currency"
                    // error = {errors.includes('type')}
                    onChange={(e)=>setType(e.target.value)}>
                    error = {errors.includes('type')}
                        {
                            typeOption.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                        }
                </TextField>
                <TextField
                    className='input'
                    placeholder='Question'
                    label='Type Value'
                    value={type_value}
                    variant='outlined'
                    helperText= "Enter Year or Chaper Name"
                    // error = {errors.includes('type_value')}
                    onChange={(e)=>setTypeValue(e.target.value)}
                    error = {errors.includes('type_value')}
                />
                <TextField
                    className='input'
                    select
                    value={subject}
                    label= 'Subject'
                    variant='outlined'
                    helperText="Please select your currency"
                    // error = {errors.includes('subject')}
                    onChange={(e)=>setSubject(e.target.value)}>
                        {
                            subjectOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                        }
                </TextField>
                <TextField
                    className='input'
                    select
                    value={standard}
                    label= 'Standard'
                    variant='outlined'
                    helperText="Please select your currency"
                    // error = {errors.includes('standard')}
                    onChange={(e)=>setStandard(e.target.value)}>
                        {
                            standardOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                        }
                </TextField>
                <TextField
                    className='input'
                    select
                    value={stream}
                    label= 'Stream'
                    variant='outlined'
                    helperText="Please select your currency"
                    // error = {errors.includes('stream')}
                    onChange={(e)=>setStream(e.target.value)}>
                        {
                            streamOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                        }
                </TextField>
                <TextField
                    className='input'
                    label='Time'
                    type = 'number'
                    value={time}
                    variant='outlined'
                    helperText="Enter Time in minutes"
                    // error = {errors.includes('time')}
                    onChange={(e)=>setTime(e.target.value)}
                />
                
            </div>
            <div className="errors">
                {
                    errors.map((error)=> 
                        <Alert 
                            className='error'  
                            severity='error' 
                            onClose={()=>{setErrors(errors.filter(data=> data !== error))}}
                            variant='filled'
                            key={error}>
                                {error}
                            
                        </Alert>
                    )
                }
            </div>
            <div className="questions">
                <div className="accordance">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                        >
                            <Typography variant='h5'>Questions</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {questions.length>0 ?
                                <div className='container-flex'>
                                    {
                                        questions.map((question,index)=>
                                            <QuestionForm 
                                                key={index} {...question} 
                                                index={index} 
                                                delete={deleteQuestion} 
                                                disabled={true}
                                                save={saveQuestion}
                                            /> 
                                        )
                                    }
                                </div>
                                
                                :<Alert className='input' severity='warning' variant='outlined'>No Question Added yet</Alert>
                            }
                            
                        </AccordionDetails>

                    </Accordion>
                </div>
                
            </div>
            <div className="btn-container">
                
            </div>
            
            {questionForm && <QuestionForm save={saveQuestion} disabled={false}/>}
            <div className='btn-container'>
                <Button onClick={()=>setQuestonForm(!questionForm)} >Add Question</Button>
                {!!!_id &&<Button onClick={createHandler}>Create Test</Button>}
                {_id && <Button onClick={()=>props.update(data)}>Update</Button>}
            </div>
            
        </div>
    )
}

export default TestForm
