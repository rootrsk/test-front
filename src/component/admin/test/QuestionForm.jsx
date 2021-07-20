import { Button, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

function QuestionForm(props) {
    const [disabled,setDisabled] = useState(props.disabled)
    const [h_question,setHquestion] = useState(props.h_question || '')
    const [option_1,setOption1] = useState(props.option_1 || '')
    const [option_2,setOption2] = useState(props.option_2 || '')
    const [option_3,setOption3] = useState(props.option_3 || '')
    const [option_4,setOption4] = useState(props.option_4 || '')
    const [heading,setHeading] = useState(props.heading||'')
    const [qn_e, setQnE] = useState(props.qn_e||'')
    const [qn_h, setQnH] = useState(props.qn_h||'')
    const [image, setImage] = useState(props.image || '')
    const [correct_answer, setCorrectAnswer] = useState(props.correct_answer || '')
    const [correct_option ,setCorrectOption] = useState(props.correct_option || '')
    const [explanation,setExplanation] = useState(props.explanation || '')
    const [st_1,setSt1] = useState(props.st_1||'')
    const [st_2,setSt2] = useState(props.st_2||'')
    const [qn_type,setqn_type] = useState(props.qn_type||'mcq')

    const correctOptions = [
        {label:'Option 1',value:1},{label:'Option 2',value:2},{label:'Opiton 3',value:3},{label:'Option 4',value: 4}
    ]
    const qn_typeOption = [
        { label: 'MCQ', value: 'mcq' }, { label: 'Statement Based', value: 'sb' }, { label: 'Fill in the blnaks', value: 'fib' }, 
        { label: 'True-Fase', value: 'tf' }
    ]
    const saveHandler = () =>{
        props.save({h_question,option_1,option_2, option_3,option_4,correct_option,explanation,index:props.index,
            heading,qn_e,qn_h,image,correct_answer,st_1,st_2,qn_type
        })
        if(props.index> -1) setDisabled(true)
    }
    // console.log(props)
    return (
        <div className='test_crud'>
            <h1 className='title p-tb_10'>Question From </h1>
            <div className="test-form-container" disabled>
                <Grid container spacing={2}>
                    <Grid item sx={12} sm={12} md={6}>
                        <TextField
                            className='input'
                            select
                            value={qn_type}
                            label='Question Type'
                            disabled={disabled}
                            variant='outlined'
                            style={{ margin: '10px 0px' }}
                            onChange={(e) => setqn_type(e.target.value)}>
                            {
                                qn_typeOption.map((option) => <MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                            }
                        </TextField>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6}>
                        <TextField
                            label='Question Heading'
                            value={heading}
                            disabled={disabled}
                            variant='outlined'
                            onChange={(e) => setHeading(e.target.value)}
                            className='input'
                            style={{ margin: '10px 0px' }}
                        />
                    </Grid>
                    <Grid item sx={12} sm={12} md={12}>
                        <TextField
                            className='input'
                            placeholder='Question-English'
                            label='Question-Hindi'
                            value={qn_h}
                            variant='outlined'
                            onChange={(e) => setQnH(e.target.value)}
                            disabled={disabled}
                            style={{ margin: '10px 0px' }}
                        />
                    </Grid>
                    <Grid item sx={12} sm={12} md={12}>
                        <TextField
                            className='input'
                            placeholder='Question-English'
                            label='Question-English'
                            value={qn_e}
                            variant='outlined'
                            onChange={(e) => setQnE(e.target.value)}
                            disabled={disabled}
                            style={{ margin: '10px 0px' }}
                        />
                    </Grid>
                    <Grid item sx={12} sm={12} md={12}>
                        <TextField
                            label='Image'
                            value={image}
                            disabled = {disabled}
                            variant='outlined'
                            onChange={(e)=>setImage(e.target.value)}
                            className='input'
                            style={{margin:'10px 0px'}}
                        />
                    </Grid>
                    
                    {qn_type === 'sb' && 
                        <>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    placeholder='Statement 1'
                                    label='Statement 1'
                                    value={st_1}
                                    variant='outlined'
                                    onChange={(e) => setSt1(e.target.value)}
                                    disabled={disabled}
                                    style={{ margin: '10px 0px' }}
                                />
                            </Grid>
                            <Grid item sx={12} sm={12} md={6}>
                                <TextField
                                    className='input'
                                    placeholder='Statement 2'
                                    label='Statement 2'
                                    value={st_2}
                                    variant='outlined'
                                    onChange={(e) => setSt2(e.target.value)}
                                    disabled={disabled}
                                    style={{ margin: '10px 0px' }}
                                />
                            </Grid>
                        </>
                    }
                    {(qn_type==='mcq' || qn_type==='sb') && 
                    <>
                        <Grid item sx={12} sm={12} md={6}>
                            <TextField
                                className='input'
                                label='Option 1'
                                value={option_1}
                                helperText='Enter Option 1'
                                disabled={disabled}
                                variant='outlined'
                                onChange={(e) => setOption1(e.target.value)}
                                style={{ margin: '10px 0px' }}
                            />
                        </Grid>
                        <Grid item sx={12} sm={12} md={6}>
                            <TextField
                                className='input'
                                label='Option 2'
                                value={option_2}
                                helperText='Enter Option 2'
                                disabled={disabled}
                                variant='outlined'
                                onChange={(e) => setOption2(e.target.value)}
                                style={{ margin: '10px 0px' }}
                            />
                        </Grid>
                        <Grid item sx={12} sm={12} md={6}>
                            <TextField
                                className='input'
                                label='Option 3'
                                value={option_3}
                                variant='outlined'
                                helperText='Enter Option 3'
                                disabled={disabled}
                                onChange={(e) => setOption3(e.target.value)}
                                style={{ margin: '10px 0px' }}
                            />
                        </Grid>
                        <Grid item sx={12} sm={12} md={6}>
                            <TextField
                                className='input'
                                label='Option 4'
                                value={option_4}
                                disabled={disabled}
                                helperText='Enter Option 4'
                                variant='outlined'
                                onChange={(e) => setOption4(e.target.value)}
                                style={{ margin: '10px 0px' }}
                            />
                        </Grid>
                        <Grid item sx={12} sm={12} md={6}>
                            <TextField
                                className='input'
                                select
                                value={correct_option}
                                label='Answer'
                                disabled={disabled}
                                variant='outlined'
                                style={{ margin: '10px 0px' }}
                                onChange={(e) => setCorrectOption(e.target.value)}>
                                {
                                    correctOptions.map((option) => <MenuItem value={option.value} key={option.value}> {option.label} </MenuItem>)
                                }
                            </TextField> 
                        </Grid>
                    </>
                }
                </Grid>
                
                {(qn_type === 'fib') &&
                    <div>
                        <TextField
                            className='input'
                            label='Correct Answer'
                            value={correct_answer}
                            // helperText='Enter Option 1'
                            disabled={disabled}
                            variant='outlined'
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                            style={{ margin: '10px 0px' }}
                        />
                    </div>
                }
                
                
                <TextField
                    className='input'
                    label='Explanation'
                    variant='outlined'
                    value={explanation}
                    disabled = {disabled}
                    helperText='Enter Explantion'
                    onChange={(e)=>setExplanation(e.target.value)}
                    style={{ margin: '10px 0px' }}
                />


                
                
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
