import { Oval } from '@agney/react-loading'
import { Checkbox } from '@material-ui/core'
import React, { useEffect, useState, useCallback } from 'react'
import { postApi } from '../../../utils/userApi'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LiveTest from './LiveTest'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import './tests.css'
function TestVerification(props) {
    const [_id,setId] = useState('')
    const [loading,setLoading] = useState(false)
    const [test,setTest] = useState(null)
    const [testDetails,setTestDetails] = useState(null)
    const [answer,setAnswer] = useState(null)
    const handleScreen = useFullScreenHandle()
    const [activeQuestion,setActiveQuestion] = useState(0)
    const [answers,setAnswers] = useState()

    const initVerification = async(_id) =>{
        setLoading(true)
        const {data,error} = await postApi({url:'/test/verify',data:{test_id:_id}})
        setLoading(false)
        if(!error){
            setTest(data.test)
        }
        console.log({data,error})
    }
    const startTestHandler = async()=>{
        setLoading(true)
        const {data,error} = await postApi({url:'/test/start',data:{test_id:_id}})
        setLoading(false)
        if(error){
            return
        }
        setTestDetails(data.test)
        setAnswer(data.answer)
        setAnswers(data.answer.answers[activeQuestion])
    }
    const saveAnswer = (data) =>{
        const answers = answer
        answers.answers[activeQuestion] = data
        setActiveQuestion(activeQuestion)
        setAnswer(answers)
        setAnswers(answer.answers[activeQuestion])
    }
    const submitHandler = async () => {
        console.log(answer)
    }
    useEffect(()=>{
        initVerification(props.location.search.split('?')[1])
        setId(props.location.search.split('?')[1])
    },[])
    if(loading)
    return (
        <div className='absolute-loading'>
            <div className="loading-container">
                <Oval style={{color:'#ffffff'}} />
            </div>
        </div>
    )
    if(testDetails && answer){
        
        return(
            <div>
                <p className='title'>Test is only Available in FullScreen</p>
                <button id='enter' onClick={handleScreen.enter}>Go To FullScreen</button>
                <FullScreen handle={handleScreen}>
                    
                    {
                        handleScreen.active && 
                        <LiveTest 
                            answer={answers} 
                            test={testDetails} 
                            activeQuestion={activeQuestion}
                            setActiveQuestion={setActiveQuestion}
                            saveAnswer={saveAnswer}
                            setAnswer={setAnswer}
                            answers = {answer}
                            submitHandler={submitHandler}
                        />
                    }
                </FullScreen>
            </div>
        )
    }
    
    return (
        <div className='verification-page'>
            <p>Verifiacation</p>
            {test && 
                <div className="test-details">
                    <input type='checkbox' />
                </div>
            }
            <button onClick={startTestHandler}>Start</button>
        </div>
    )
}
export default TestVerification

