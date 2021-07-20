import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import QuestionForm from './QuestionForm'
import Alert from '@material-ui/lab/Alert'
import './style.css'
import { ExpandMore } from '@material-ui/icons'
import { postApi } from '../../../utils/adminApi'

function TestForm(props) {
    const [_id,setId] = useState(props._id)
    const [title,setTitle] = useState(props.title || '')
    const [type,setType] = useState(props.type || '')
    const [cat_value,setCatValue] = useState(props.cat_value || '')
    const [time_limit,setTimeLimit] = useState(props.time_limit || '')
    const [stream,setStream] = useState(props.stream || '')
    const [subject,setSubject] = useState(props.subject || '')
    const [standard,setStandard] = useState(props.standard || 10)
    const [questions,setQuestion] = useState(props.questions || [])
    const [correct_marking,setCmarking] = useState(1)
    const [incorrect_marking,setNmarking] = useState(0)
    const [questionForm ,setQuestonForm] = useState(false)
    const [language,setLangauge] = useState(props.language||'')
    const [category,setCategory] = useState(props.category||'')
    const [logo,setLogo] = useState(props.logo||'')
    const [s_time,setStime] = useState(props.s_time||'')
    const [e_time,setEtime] = useState(props.e_time||'')
    const [published,setPublished] = useState(props.published|| false)
    const [price,setPrice] = useState(props.price || 0)
    let [errors,setErrors] = useState([])
    const  langaugeOption = [{label:'Hindi',value:'h'},{label:'English',value:'e'},{label:'Hindi-English',value:'he'}]

    const subjectOptions = [
        {label: 'English',value:'english'},{label: 'Hindi',value:'hindi'},{label: 'Science',value:'science'},
        {label: 'Social Science',value:'social science'},{label: 'Mathematics', value:'mathematics'},
        {label: 'Physics', value: 'physics'},{label: 'Chemistry', value: 'chemistry'},{label: 'Biology', value: 'biology'},{label:'General Science',value:'general science'},
        {label:'English Grammer',value:'english grammer'},{label:'History',value:'history'},{label:'All',value:'all'}
    ]

    const categoryOption = [
        { label: 'ChapterWise', value: 'cw' }, { label: 'YearWise', value: 'yw' }, 
        { label: 'Subject Wise', value: 'sw' }, { label: 'Set Wise', value: 'rm' }
    ]

    const typeOption = [
        { label: 'Live', value: 'live' }, { label: 'Quiz', value: 'quiz' },
        { label: 'Practice set', value: 'ps' },{ label: 'Test', value: 'test' }, { label: 'Set Wise', value: 'rm' }
    ]

    const standardOptions = [
        {label: '1st',value: 1},{label: '2nd',value:2},{label: '3rd',value:3},
        {label: '4th',value: 4},{label: '5th',value:5},{label: '6th',value:6},
        {label: '7th',value: 7},{label: '8th',value:8},{label: '9th',value:9},
        {label: '10th',value:10},{label: '11th',value:11},{label: '12th',value: 12},
        {label:'General',value:'gn'},{label:'All',value:'all'}
    ]
    const streamOptions = [
        {label:'Primary',value:'pm'},{label:'Arts',value:'arts'},{label:'Science',value:'sci'},
        {label:'General-Competation',value:'gc'},{label:'Othters',value:'otr'}
    ]
    const publishOptions = [
        {label:'Publish',value:true},{label:'Not Now',value:false}
    ]

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
    const data = {
        _id,title,type,cat_value,time_limit,stream,subject,standard,questions,correct_marking,incorrect_marking,language,category,logo,published,price,
        s_time,e_time
    }

    // Api Handlers
    
    const createHandler = async(data) =>{
        errors = []
        if(!title) errors.push('Title is Required.')
        if((type==='live')&& (!props.s_time || !props.e_time)) errors.push('Start and End time is requrired in live Test')
        if(!type) errors.push('Type  is Required')
        if(!cat_value) errors.push('Type Value is Required')
        if(!time_limit) errors.push('Time limit is Required.')
        if(!standard) errors.push('Standard is Reqired')
        if(!subject) errors.push('Subject is Required')
        setErrors([...errors])
        console.log(errors)
        if(errors.length>0) return
        console.log(_id, title, type, cat_value, time_limit, stream, subject, standard, questions, correct_marking, incorrect_marking, language, category)
        const response = await postApi({
            url:'/admin/test-create',
            data:{
                _id,title,type,cat_value,time_limit,stream,subject,standard,questions,correct_marking,incorrect_marking,language,category,
                logo,published,s_time,e_time
            }
        })
    }
    useEffect(() => {
    }, []);
    
    return (
        <div>
            <div className='test_crud'>
                <h1 className='title p-tb_10'>{props.page_title}</h1>
                <div className="test-form-container">
                    <TextField
                        className='input'
                        placeholder='Title'
                        required
                        label='Title'
                        value={title}
                        variant='outlined'
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    
                    
                    <TextField
                        className='input'
                        placeholder='Type'
                        select
                        required
                        value={type}
                        label= 'Type'
                        variant='outlined'
                        onChange={(e)=>setType(e.target.value)}>
                            {
                                typeOption.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                            }
                    </TextField>
                    {type==='live' && 
                        <Grid container spacing={2} >
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    // placeholder='Start Time'
                                    title='Start Time'
                                    required
                                    label='Start Time'
                                    value={s_time}
                                    variant='outlined'
                                    type='datetime-local'
                                    onChange={(e)=>setStime(e.target.value)}
                                    // error = {errors.includes('title')}
                                />
                            </Grid>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    placeholder='Question'
                                    required
                                    label='End Time'
                                    value={e_time}
                                    variant='outlined'
                                    onChange={(e)=>setEtime(e.target.value)}
                                    type='datetime-local'
                                    // error = {errors.includes('title')}
                                />
                            </Grid>
                        </Grid>
                    }
                    <Grid container spacing={2} >
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    placeholder='Question'
                                    select
                                    required
                                    value={category}
                                    label='Category'
                                    variant='outlined'
                                    onChange={(e) => setCategory(e.target.value)}>
                                    {
                                        categoryOption.map((option) => <MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                                    }
                                </TextField>
                            </Grid>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    placeholder='Question'
                                    label='Category Value'
                                    value={cat_value}
                                    variant='outlined'
                                    onChange={(e)=>setCatValue(e.target.value)}
                                    error = {errors.includes('cat_value')}
                                />
                            </Grid>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    placeholder='Language'
                                    select
                                    required
                                    value={language}
                                    label='Language'
                                    variant='outlined'
                                    onChange={(e) => setLangauge(e.target.value)}>
                                    {
                                        langaugeOption.map((option) => <MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                                    }
                                </TextField>
                            </Grid>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    select
                                    value={subject}
                                    label= 'Subject'
                                    variant='outlined'
                                    onChange={(e)=>setSubject(e.target.value)}>
                                        {
                                            subjectOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                                        }
                                </TextField>
                            </Grid>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    select
                                    value={standard}
                                    label= 'Standard'
                                    variant='outlined'
                                    onChange={(e)=>setStandard(e.target.value)}>
                                        {
                                            standardOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                                        }
                                </TextField>
                            </Grid>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    select
                                    value={stream}
                                    label= 'Stream'
                                    variant='outlined'
                                    onChange={(e)=>setStream(e.target.value)}>
                                        {
                                            streamOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                                        }
                                </TextField>
                            </Grid>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    label='Time Limit in Minutes'
                                    type = 'number'
                                    value={time_limit}
                                    variant='outlined'
                                    onChange={(e)=>setTimeLimit(e.target.value)}
                                />
                            </Grid>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    select
                                    value={published}
                                    label= 'Publish'
                                    variant='outlined'
                                    onChange={(e)=>setPublished(e.target.value)}>
                                        {
                                            publishOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                                        }
                                </TextField>
                            </Grid>
                            <Grid item sm={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    placeholder='Logo'
                                    required
                                    label='Logo'
                                    value={logo}
                                    variant='outlined'
                                    onChange={(e)=>setLogo(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    placeholder='Price'
                                    required
                                    label='Price'
                                    value={price}
                                    variant='outlined'
                                    type='number'
                                    onChange={(e)=>setPrice(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    
                    
                </div>
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
            <div className="questions-accordion">
                <div className="">
                    <Accordion >
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
