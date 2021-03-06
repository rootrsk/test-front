import { Button, CircularProgress, IconButton, Menu } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Close, MenuOpen } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProgressChart from '../../home/ProgressChart'
import Timer from '../../home/Timer'
import GoToQuestion from './GoToQuestion'
import QuestionTemplate from './QuestionTemplate'
import './style.css'
import { Link } from 'react-router-dom';


function LiveTest(props) {
    const [_id,setId] = useState('')
    const [test,setTest] = useState(null)
    const [answers,setAnswer]= useState([])
    const [questions,setQuestions] = useState([])
    const [active_question,setActiveQuestion] = useState(0)
    const [active_answer,setActiveAnswer] = useState(null)
    const [question_answer,setQuestionAnswer] = useState([])
    const [open,setOpen] = useState(false)
    const [isSubmitted,setIsSubmitted]= useState(false)
    const [answer_id,setAnswerId] = useState('')
    // Fetch Test From test id
    const getTest = async(id) =>{
        const response = await axios({
            url: `/user/test/${id}`,
            method:'GET',
        })
        if(response.data.status === 'success'){
            setId(response.data.test._id)
            setTest(response.data.test)
            setQuestions(response.data.test.questions)
            setActiveQuestion(0)
            setAnswer(new Array(response.data.test.questions.length).fill({user_answer:'',is_visited:false,is_marked: false}))
            setActiveAnswer(answers[active_question])
            console.log(response.data)
        }
    }
    // Function to submit the answers
    const submitHandler = async() =>{
        const response = await axios({
            url: `/user/test/submit`,
            method: 'POST',
            data:{
                answers,_id
            }
        })
        if(response.data.status==='success'){
            setAnswerId(response.data.answer._id)
            setIsSubmitted(true)
        }
        console.log(response.data)
    }
    // Function to goto next question
    const next = (e) =>{    
        if(active_question === questions.length-1){
            return submitHandler()
        } else{
            answers[active_question] = {
                user_answer : answers[active_question].user_answer, 
                is_visited: true,
                is_marked: answers[active_question].is_marked
            }
            setActiveAnswer(answers[active_question+1])
            setActiveQuestion(active_question+1)
        }
        
    }
    // Function to go to prev Question
    const prev = (e) =>{    
        if(active_question === 0 ){
            return console.log(answers)
        } else{
            answers[active_question] = {
                user_answer : answers[active_question].user_answer, 
                is_visited: true,
                is_marked: answers[active_question].is_marked
            }
            setActiveAnswer(answers[active_question-1])
            setActiveQuestion(active_question-1)
        }
    }
    // function to go to qn
    const goTo = (qn) =>{
        answers[active_question] = {
            user_answer : answers[active_question].user_answer, 
            is_visited: true,
            is_marked: answers[active_question].is_marked
        }
        setActiveAnswer(answers[qn])
        setActiveQuestion(qn)
    }
    // Function for saving the qanswer
    const saveAnswer = (answer) =>{
        console.log('Saving')
        answers[active_question] = {
            user_answer : answer, 
            is_visited: true,
            is_marked: answers[active_question].is_marked
        }
        setActiveAnswer(answers[active_question])
    }
    const markReview = () =>{
        console.log('markgin')
        if(answers[active_question].is_marked){
            console.log('Already')
            answers[active_question] = {
                user_answer : answers[active_question].user_answer, 
                is_visited: true,
                is_marked: false
            }
        } else {
            answers[active_question] = {
                user_answer : answers[active_question].user_answer, 
                is_visited: true,
                is_marked: true
            }
        }
        
        setActiveQuestion(active_question)
        setActiveAnswer(answers[active_question])
    }
    
    useEffect(()=>{
        getTest(props.location.search.split('?')[1]);
        console.log(props.location.search.split('?')[1])
        window.addEventListener("beforeunload", function(e) { 
            window.alert('HHHHH')
            console.log(e)
            e.preventDefault()
        });
    },[])

    return (
        <div className='live-test '>
            <div className='container-flex heading web'>
                {test&& <p>{test.subject.toUpperCase()}</p>}
                {test && <p> {test.title}</p>}
                {test && <p> {test.type_value}</p>}
            </div>
            <div className="questions">
                <div className="test_head-container">
                    <div>
                        
                    </div>
                    <IconButton onClick={()=>setOpen(!open)} style={{background:'black'}}>
                        {open?<CloseIcon />:<MenuIcon />}
                    </IconButton>
                </div>
                {
                    test && answers.length > 0 &&
                        <QuestionTemplate 
                            answer={active_answer}
                            {...questions[active_question]}
                            save = {saveAnswer}
                            index = {active_question}
                            key={active_question}
                        />
                }
                <div className="questions-btns">
                    <Button onClick={prev}>Prev</Button>
                   {answers.length>0 &&  <Button onClick={markReview}>{answers[active_question].is_marked?'Remove':' Mark'}</Button>}
                    <Button onClick={next}>{active_question === questions.length-1? 'Submit': 'Next'}</Button>
                </div>
                
            </div>
            <div className='container-flex heading  web' style={{margin:'20px 0px'}}>
                {test && <p>Q : {test.questions.length}</p>}
                {test && <p>T : {test.time}mins</p>}
                {test && 
                    <p>
                        <Timer 
                            onExpire={submitHandler} 
                            className='timer' 
                            expiryTimestamp={new Date().setSeconds(new Date().getSeconds()+60*test.time)} 
                        />
                    </p>
                }
                <Button onClick={submitHandler} variant='contained'>Submit</Button>
            </div>
            <div>
                {open&&
                    <div className="go_to_boxes">
                        {
                            answers.length>0 && questions.map((qn,index)=>
                                <GoToQuestion 
                                    goTo={goTo} 
                                    index={index} 
                                    key={index}
                                    active={active_question === index}
                                    is_answered={!!answers[index].user_answer}
                                    is_visited={!!answers[index].is_visited}
                                    is_marked={!!answers[index].is_marked}
                                />
                            )
                        }
                    </div>
                }
            </div>
            {isSubmitted &&<div className='abs full'>
                <div>
                    <Link className='p-btn' to='/app/live-test'>Retrun Home</Link>
                    <Link className='p-btn' to={`/app/result?${answer_id}`}>Check Result</Link>
                </div>
            </div>}
        </div>
    )
}

export default LiveTest
 