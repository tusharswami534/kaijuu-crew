import React, { useEffect, useState } from 'react'
import BackToTopImage from '../../assets/image/webp/back-to-top.webp'

const BackToTop = () => {
   const [scrollTop , setToTop] = useState(false)
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }
 const setHandler = () => {
    setToTop (window.scrollY > 100)
 }
    
    useEffect(() => {
        window.addEventListener("scroll" , setHandler )
    }, [])
    

    
  return (
    <div>
        {scrollTop && (  <button onClick={handleClick} className='fixed bottom-5 right-5'><img src={BackToTopImage} alt="backtotopLine" /></button> )
    }
    </div>
  )
}

export default BackToTop