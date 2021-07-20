import React, {useEffect, useState, useCallback} from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import QuestionTemplate from '../../../component/user/test/QuestionTemplate'
function LiveTest({test,answer,activeQuestion,setActiveQuestion,saveAnswer,setAnswer,answers}) {
    const handleScreen = useFullScreenHandle()
    const next = () =>{
        if(activeQuestion >= test.questions.length-1) return
        setActiveQuestion(activeQuestion+1)
    }
    const prev = () =>{
        if(activeQuestion===0)return
        setActiveQuestion(activeQuestion - 1)
    }
    const save = (user_answer) =>{
        // console.log(answer.answers[activeQuestion])

        // const a = answer.answers[activeQuestion]
        // console.log(user_answer)
        saveAnswer({
            ...answer,
            user_answer: user_answer,
            is_visited:true
        })
        // const ans = answers
        // ans.answers[activeQuestion] = { ...answer,user_answer,is_visited:true}
        // setAnswer(ans)
        
    }
    useEffect(()=>{
        // handleScreen.enter()
    },[answer])
    return (
        <div className='live-test-page'>
            <p>Test is Started</p>
            <QuestionTemplate
                {...test.questions[activeQuestion]}
                save={save}
                answer={{...answers.answers[activeQuestion]}}
            />
            {console.log(answer)}
            <button onClick={prev} disabled={activeQuestion<=0} >Prev</button>
            <button onClick={next}disabled={activeQuestion>=test.questions.length-1}>Next</button>
        </div>
    )
}

export default LiveTest
