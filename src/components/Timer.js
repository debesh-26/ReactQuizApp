import React, { useEffect, useState } from 'react'

const Timer = ({setTimeOut,questionNumber}) => {
    const [time, setTime] = useState(30);
    useEffect(() => {
        if (time === 0) {
           return setTimeOut(true);
        }
        const timer = setInterval(() => {
            setTime(time => time - 1);
        }, 1000);
        return () => clearInterval(timer);
    },[time, setTimeOut]);
    useEffect(() => {
        setTime(30);
    },[questionNumber]);
  return (
    <div>{time}</div>
  )
}

export default Timer