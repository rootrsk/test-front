import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'

function GoToQuestion(props) {
    useEffect(()=>{
        
    },[])
    return (
        <div className='go_to_box'>
            <Button 
                variant='outlined'
                style={{background:props.active?'#ffffff': props.is_marked? '#0067FF':
                    props.is_answered && props.is_visited ?'#2cff28': 
                        props.is_visited?'#FF0A0A':'#00B192'}}
                onClick={()=>props.goTo(props.index)}>{props.index+1}
            </Button>
        </div>
    )
}

export default GoToQuestion
