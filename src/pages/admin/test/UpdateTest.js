import React, { useEffect, useState } from 'react'
import TestForm from '../../../component/admin/test/TestForm'
import { patchApi, postApi } from '../../../utils/adminApi'

function UpdateTest(props) {
    const [test, setTest] = useState(null)
    const [loading,setLoading] = useState(false)

    const getTest = async (test_id) => {
        setLoading(true)
        const {data,error} = await postApi({url: `/admin/test/`,data:{test_id}})
        setLoading(false)
        if(error){
            return
        }
        console.log(data.test)
        setTest(data.test)
    }
    const updateHandler = async (testDetails) => {
        console.log(testDetails)
        const {data,error} = await patchApi({url: `/admin/test`,data:{...testDetails}})
    }
    useEffect(() => {
        if (!props.location.search) {
            return props.history.push('/admin/tests')
        }
        getTest(props.location.search.split('?')[1])
    }, [])
    return (
        <>
            {test && 
                <TestForm update={updateHandler} page_title={'Update Test'} {...test} />
            }
        </>
    )
}

export default UpdateTest
