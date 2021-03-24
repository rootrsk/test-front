import React from 'react'
import ProgressChart from '../../home/ProgressChart'

function Result(props) {
    return (
        <div style={{display:'grid',placeItems:'center'}}> 
            
            <div className="marks">
                <ProgressChart />
            </div>
        </div>
    )
}

export default Result
