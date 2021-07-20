import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProgressChart from '../../home/ProgressChart'
import QuestionTemplate from './QuestionTemplate'

function Result(props) {
    console.log(props)
    const [questions,setQuestions] = useState([])
    const [answers,setAnswers] = useState([])
    const [test,setTest] = useState(null)
    const getTest = async(id)=>{
        const response = await axios({
            url:`/user/completed-test/${id}`,
            method: 'GET'
        })
        console.log(response.data)
        if(response.data.status==='success'){
            setTest(response.data.test)
            setAnswers(response.data.test.answers)
            setQuestions(response.data.test.test_id.questions)
        }
    }
    useEffect(()=>{
        if(props.location && props.location.search){
            getTest(props.location.search.split('?')[1])
        } else {
            props.history.push('/my/live-test')
        }
        
    },[])
    return (
        <>
            {test && 
                <div style={{display:'flex',placeItems:'center',justifyContent:'space-around',margin:'20px',flexWrap:'wrap'}}> 
                    
                    <ProgressChart title="Accuracy" total={test.correct_answers+test.incorrect_answers} obtained={test.correct_answers}/>
                    <ProgressChart title="Marks" total={test.test_id.questions.length} obtained={test.correct_answers}/>
                    <ProgressChart title="Attempts" total={test.test_id.questions.length} obtained={test.correct_answers+test.incorrect_answers}/>
                    {console.log(questions)}
                    
                    
                </div>
            }
            <div className="container-flex">
                {test &&
                    questions.map((question,index)=>
                        <QuestionTemplate 
                            answer={answers[index]}
                            result={true}
                            {...question} 
                            index={index}  
                            key={index}
                        />
                    )
                }
            </div>
        </>
    )
}

export default Result
