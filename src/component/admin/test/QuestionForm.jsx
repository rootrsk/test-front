import { Button, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

function QuestionForm(props) {
    const [disabled,setDisabled] = useState(props.disabled)
    const [question,setQuestion] = useState(props.question || '')
    const [h_question,setHquestion] = useState(props.h_question || '')
    const [option_1,setOption1] = useState(props.option_1 || '')
    const [option_2,setOption2] = useState(props.option_2 || '')
    const [option_3,setOption3] = useState(props.option_3 || '')
    const [option_4,setOption4] = useState(props.option_4 || '')
    const [correct_option ,setCorrectOption] = useState(props.correct_option || '')
    const [explanation,setExplanation] = useState(props.explanation || '')
    const correctOptions = [{label:'Option 1',value:1},{label:'Option 2',value:2},{label:'Opiton 3',value:3},{label:'Option 4',value: 4}]
    const saveHandler = () =>{
        props.save({
            question,h_question,option_1,option_2, option_3,option_4,correct_option,explanation,index:props.index
        })
        if(props.index> -1) setDisabled(true)
    }
    // console.log(props)
    return (
        <div className='question_form-template'>
            <Typography variant='h4' align='center'>Question From </Typography>
            <div className="question_form" disabled>
                <TextField
                    className='input'
                    placeholder='Question'
                    label='Question'
                    value={question}
                    variant='outlined'
                    helperText='Enter Quesiton'
                    onChange={(e)=>setQuestion(e.target.value)}
                    disabled = {disabled}
                />
                <TextField
                    className='input'
                    label='Question Hn'
                    value={h_question}
                    disabled = {disabled}
                    variant='outlined'
                    helperText='Question in other langauge'
                    onChange={(e)=>setHquestion(e.target.value)}
                />
                <TextField
                    className='input'
                    label='Option 1'
                    value={option_1}
                    helperText='Enter Option 1'
                    disabled = {disabled}
                    variant='outlined'
                    onChange={(e)=>setOption1(e.target.value)}
                />
                <TextField
                    className='input'
                    label='Option 2'
                    value={option_2}
                    helperText='Enter Option 2'
                    disabled = {disabled}
                    variant='outlined'
                    onChange={(e)=>setOption2(e.target.value)}
                />
                <TextField
                    className='input'
                    label='Option 3'
                    value={option_3}
                    variant='outlined'
                    helperText='Enter Option 3'
                    disabled = {disabled}
                    onChange={(e)=>setOption3(e.target.value)}
                />
                <TextField
                    className='input'
                    label='Option 4'
                    value={option_4}
                    disabled = {disabled}
                    helperText='Enter Option 4'
                    variant='outlined'
                    onChange={(e)=>setOption4(e.target.value)}
                />
                <TextField
                    className='input'
                    label='Explanation'
                    variant='outlined'
                    value={explanation}
                    disabled = {disabled}
                    helperText='Enter Explantion'
                    onChange={(e)=>setExplanation(e.target.value)}
                />


                <TextField
                    className='input'
                    select
                    value={correct_option}
                    label= 'Answer'
                    disabled = {disabled}
                    variant='outlined'
                    helperText="Please select correct option"
                    onChange={(e)=>setCorrectOption(e.target.value)}>
                        {
                            correctOptions.map((option)=><MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                        }
                </TextField>
                
            </div>
            <div className='btn-container'>
                {!disabled &&
                    <Button onClick={saveHandler}>Save</Button>
                }
                {props.index >=0 &&
                    <Button onClick={()=>setDisabled(false)}>Edit</Button>
                }
                
                {props.index >=0 && 
                    <Button onClick={()=>props.delete(props.index)}>Delete</Button>
                }
            </div>
        </div>
    )
}

export default QuestionForm
