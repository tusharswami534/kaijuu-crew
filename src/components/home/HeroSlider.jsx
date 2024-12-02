import React from 'react'
import { HERO_SLIDER } from '../common/Helper'

const HeroSlider = () => {
  return (
    <div>
        <div className='flex overflow-hidden'>
            <div className='hero-slider flex'>
                {HERO_SLIDER.map((item , index) => <img key={index} className='w-full object-cover max-h-[295px]' src={item.imgSrc} alt="ImageOne" />)}
            </div>
        </div>
    </div>
  )
}

export default HeroSlider
