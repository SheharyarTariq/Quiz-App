import React, {useEffect, useState} from 'react';

function QuestionTimer({timeout, onTimeout,mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(()=>{
       const timer=setTimeout(onTimeout,timeout);

       return () => clearTimeout(timer);
    },[timeout,onTimeout]);

    useEffect(() => {
         const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime-100)
        },100)

         return () => clearInterval(interval)
    },[])

        return(
         <progress id='question-timer' value={remainingTime} max={timeout} className={mode}/>
        )
}

export default QuestionTimer;