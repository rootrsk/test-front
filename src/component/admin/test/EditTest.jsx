import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TestForm from './TestForm'

function EditTest(props) {
    const [test,setTest] = useState(null)
    const getTest = async(id) =>{
         console.log(id)
        const response = await axios({
            url: `/admin/tests/${id}`,
            method: 'get',
        })
        if(response.data.status === 'success'){
            setTest(response.data.test)
        }
        console.log(response.data)
    }
    const updateHandler = async(data)=>{
        const response = await axios({
            url:`/admin/test`,
            method: 'PATCH',
            data
        })
        console.log(response)
        console.log(data)
    }
    useEffect(()=>{
        if(!props.location.search){
            return props.history.push('/admin/tests')
        }
        getTest(props.location.search.split('?')[1])
    },[])
    return (
        <div>
            {test && <TestForm {...test} update = {updateHandler} />}
        </div>
    )
}

export default EditTest
