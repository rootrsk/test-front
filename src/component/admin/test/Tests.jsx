import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import TestTemplate from './TestTemplate'

function Tests() {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const [tests,setTests] = useState([])
    const getTests = async() =>{
        const response = await axios({
            url: `/admin/test`,
            method: 'get',
        })
        console.log(response)
        if(response.data.status==='sucess'){
            console.log(response.data.message)
            console.log(response.data.tests)
            setTests(response.data.tests)
        }
    }
    useEffect(()=>{
        getTests()
    },[])
    return (
        <div>
            <div className="tests">
                {
                    tests.map((test)=> <TestTemplate {...test} key={test._id} />)
                }
            </div>
        </div>
    )
}

export default Tests
