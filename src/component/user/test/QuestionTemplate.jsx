import { Button } from '@material-ui/core'
import React, { useState,useEffect } from 'react'

function QuestionTemplate(props) {
    const [answer,setUserAnswer] = useState(props.answer)
    const saveAnswer = (option) =>{
        if(props.answer && props.answer.user_answer === option){
            return props.save('')
        }
        props.save(option)
    }
    
    useEffect(()=>{
        document.getElementsByClassName('option')[0].style.background = '#ffffff'
        document.getElementsByClassName('option')[1].style.background = '#ffffff'
        document.getElementsByClassName('option')[2].style.background = '#ffffff'
        document.getElementsByClassName('option')[3].style.background = '#ffffff'
        if(props.answer){
            // console.log('I got a answer')
            // console.log(props.answer)

            const option = document.getElementsByClassName('option')[props.answer.user_answer-1]
            if(option){
                option.style.background = '#2cff28'
            } else{
            }
        }
    },[props.answer])
    return (
        <div className='question'>
            <div className="question_head">
                <p>{props.index+1}. {props.question}</p>
                <p>{props.h_question}</p>
            </div>
            <div className="question_tail">
                <Button 
                    id='1'
                    className='option'
                    style={{}}
                    onClick={()=>saveAnswer(1)}
                    variant='outlined'>{props.option_1}
                    
                </Button>
                <Button
                    id='2' 
                    className='option'
                    onClick={()=>saveAnswer(2)}
                    variant='outlined'>{props.option_2}
                    
                </Button>
                <Button 
                    id='3'
                    className='option'
                    onClick={()=>saveAnswer(3)}
                    variant='outlined'>{props.option_3}
                    
                </Button>
                <Button 
                    id='4'
                    className='option'
                    onClick={()=>saveAnswer(4)}
                    variant='outlined'>{props.option_4}
                </Button>
            </div>
            {/* {console.log(props.answer)} */}
            <div className="glass"></div>
        </div>
    )
}

export default QuestionTemplate
