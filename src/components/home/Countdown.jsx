import React, { useEffect, useState } from 'react'

const Countdown = () => {
    const  [Count , setCount] = useState(1000)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(Count -1 );
    //     }, 1000);
    // },)
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(Count -1 );
    //     }, 1000);
    //     return () => clearInterval(interval);
    // })

    useEffect(() => {
        setTimeout(() => {
            setCount(Count -1 );
        }, 1000);
    }, )
  return (
    <div className='pt-4'>
        <p className='text-white font-oswald leading-150 text-5xl pt-0.5'>{Count}</p>
        <p className='font-oswald text-hit-grey'>Days left</p>
    </div>
  )
}

export default Countdown
