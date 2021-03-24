import React from 'react'
import { useTimer } from 'react-timer-hook';

function Timer({expiryTimestamp,onExpire}) {
    const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
  } = useTimer({ expiryTimestamp, onExpire });
    return (

        <>
            {days>0&&<span>{days}: </span>} 
            {/* <span>{hours}</span>: */}
            <span>{hours<10?'0':hours.toString()[0]}</span>
            <span>{hours>10 ?hours.toString()[1]:hours}</span>:
            <span>{minutes<10?'0':minutes.toString()[0]}</span>
            <span>{minutes>10 ?minutes.toString()[1]:minutes}</span>:
            <span>{seconds<10?'0':seconds.toString()[0]}</span>
            <span>{seconds>10 ?seconds.toString()[1]:seconds}</span>
        </>

    )
}

export default Timer
