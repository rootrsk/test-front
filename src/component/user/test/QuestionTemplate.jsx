import { Button } from '@material-ui/core'
import React, { useState,useEffect } from 'react'

function QuestionTemplate(props) {
    // console.log(props)
    const [option1, setOption1] = useState('#ffffff')
    const [option2, setOption2] = useState('#ffffff')
    const [option3, setOption3] = useState('#ffffff')
    const [option4, setOption4] = useState('#ffffff')
    const saveAnswer = (option) =>{
        if(!!!props.save) return
        if(props.answer && props.answer.user_answer === option){
            return props.save('')
        }
        props.save(option)
    }
    
    useEffect(()=>{
        if(!!props.result){
            if (props.correct_option === 1) setOption1('green')
            if (props.correct_option === 2) setOption2('green')
            if (props.correct_option === 3) setOption3('green')
            if (props.correct_option === 4) setOption4('green')
        }
        if(props.answer && props.result){
            if (props.answer.user_answer === 1 && props.correct_option !== 1) setOption1('#f70a46')
            if (props.answer.user_answer === 2 && props.correct_option !== 2) setOption2('#f70a46')
            if (props.answer.user_answer === 3 && props.correct_option !== 3) setOption3('#f70a46')
            if (props.answer.user_answer === 4 && props.correct_option !== 4) setOption4('#f70a46')

            if (props.answer.user_answer === 1 && props.correct_option === 1) setOption1('#6df241')
            if (props.answer.user_answer === 2 && props.correct_option === 2) setOption2('#6df241')
            if (props.answer.user_answer === 3 && props.correct_option === 3) setOption3('#6df241')
            if (props.answer.user_answer === 4 && props.correct_option === 4) setOption4('#6df241')
        }
        if(props.answer && !props.result){
            props.answer.user_answer === 1 ? setOption1('#6df241') : setOption1('#ffffff')
            props.answer.user_answer === 2 ? setOption2('#6df241') : setOption2('#ffffff')
            props.answer.user_answer === 3 ? setOption3('#6df241') : setOption3('#ffffff')
            props.answer.user_answer === 4 ? setOption4('#6df241') : setOption4('#ffffff')
            
        }
    },[props.answer])
    
    return (
        <div className='question'>
            <div className="question_head">
                <p className='qn-title'>{props.heading}</p>
                {props.qn_e &&
                    <p className='question_h'>{props.index+1}. {props.qn_e}</p>
                }
                {props.qn_h && 
                    <p className='question_h'>{props.index + 1}. {props.qn_h}</p>
                }
            </div>
            <div className="question_tail">
                <Button 
                    id='1'
                    className='option'
                    style={{backgroundColor:option1}}
                    onClick={()=>saveAnswer(1)}
                    variant='outlined'>{props.option_1}
                    
                </Button>
                <Button
                    id='2' 
                    className='option'
                    style={{backgroundColor:option2}}
                    onClick={()=>saveAnswer(2)}
                    variant='outlined'>{props.option_2}
                    
                    
                </Button>
                <Button 
                    id='3'
                    className='option'
                    style={{backgroundColor:option3}}
                    onClick={()=>saveAnswer(3)}
                    variant='outlined'>{props.option_3}

                    
                </Button>
                <Button 
                    id='4'
                    className='option'
                    style={{backgroundColor:option4}}
                    onClick={()=>saveAnswer(4)}
                    variant='outlined'>{props.option_4}
                </Button>
            </div>
            {console.log(props.answer)}
            {props.result && props.explanation && 
                <div className='explanation'>
                    <span><b>Explanation : </b> {props.explanation}</span>
                </div>
            }
        </div>
    )
}

export default QuestionTemplate
