import React, { useState, useEffect } from 'react'
import TestTemplate from '../../../component/admin/test/TestTemplate'
import { postApi } from '../../../utils/adminApi'
import './tests.css'
function Tests() {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const [tests,setTests] = useState([])
    const getTests = async() =>{
        const {data,error} = await postApi({url: `/admin/tests`})
        if(error){

        }else{
            setTests(data.tests)
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
