import { Button } from '@material-ui/core';
import React, {useEffect, useState, useCallback} from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import GoToQuestion from '../../../component/user/test/GoToQuestion';
import QuestionTemplate from '../../../component/user/test/QuestionTemplate'
function LiveTest({test,answer,activeQuestion,setActiveQuestion,saveAnswer,setAnswer,answers,submitHandler}) {
    const handleScreen = useFullScreenHandle()
    const next = () =>{
        if(activeQuestion >= test.questions.length-1) return
        saveAnswer({...answers.answers[activeQuestion],is_visited: true})
        setActiveQuestion(activeQuestion+1)
    }
    const prev = () =>{
        if(activeQuestion===0)return
        saveAnswer({...answers.answers[activeQuestion],is_visited: true})
        setActiveQuestion(activeQuestion - 1)
    }
    const save = (user_answer) =>{
        saveAnswer({...answer,user_answer: user_answer,is_visited:true})
    }
    const markVisited = () =>{
        saveAnswer({...answer,is_visited:true})
    }
    const mark = () =>{
        if (answers.answers[activeQuestion].is_marked) return saveAnswer({
            ...answer,
            is_marked: false
        })
        return saveAnswer({...answers.answers[activeQuestion],is_marked: true})
    }
    const setVisit = () =>{
        return saveAnswer({...answers.answers[activeQuestion],is_visited: true})
    }
    useEffect(()=>{
    },[answer])
    return (
        <div className='live-test-page'>
            <div className="live-test-content">
                <QuestionTemplate
                    {...test.questions[activeQuestion]}
                    save={save}
                    answer={{...answers.answers[activeQuestion]}}
                    index={activeQuestion}
                    markVisited={markVisited}
                />
                <div className="flex-box_between w90" >
                    <Button onClick={prev} className='p-btn' disabled={activeQuestion<=0} >Prev</Button>
                    <Button onClick={mark} className='p-btn' >{answers.answers[activeQuestion].is_marked?'Remove':'Mark'} </Button>
                    <Button onClick={next} className='p-btn'disabled={activeQuestion>=test.questions.length-1} >Next</Button>
                </div>
            </div>
            <div className='go-to-sidebar'>
                <div className='go-to-div'>
                    {answers && 
                        answers.answers.map((ans,index)=>
                            <GoToQuestion 
                                index={index}
                                goTo={setActiveQuestion}
                                {...answers.answers[index]}
                                active={index == activeQuestion}
                                saveAnswer={markVisited}
                                key={index}
                            />
                        )
                    }
                </div>
                <div className = 'flex-box_center goto-bottom' >
                    <Button className='p-btn w95' onClick={submitHandler} >Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default LiveTest
