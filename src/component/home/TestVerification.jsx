import React, { useEffect } from 'react'
import { postApi } from '../../utils/api'
function TestVerification(props) {
    const initVerification = async(_id) =>{
        console.log(_id)
        const response = await postApi({url:'/user/test-verification',data:{_id}})
        console.log(response)
        
    }
    useEffect(()=>{
        initVerification(props.location.search.split('?')[1]);
    },[])
    return (
        <div className='verification-page'>
            <p>Verifiacation</p>

        </div>
    )
}

export default TestVerification

