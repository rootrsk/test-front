import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'

function GoToQuestion(props) {
    const mark = () =>{
        props.saveAnswer()
        props.goTo(props.index)
    }
    return (
        <div className='go_to_box'>
            <Button 
                variant='outlined'
                style={{
                    background:
                    props.active?'#ffffff': props.is_marked ? '#0067FF':
                    props.user_answer && props.is_visited ?'#2cff28': 
                    props.is_visited?'#FF0A0A':'#00B192'
                }}
                onClick={mark}>{props.index+1}
            </Button>
        </div>
    )
}

export default GoToQuestion
