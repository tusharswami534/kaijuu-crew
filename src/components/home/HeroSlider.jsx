import React from 'react'
import KaijuuImageOne from '../../assets/image/png/kaijuu-image-1.png'
import KaijuuImageTwo from '../../assets/image/png/kaijuu-image-2.png'
import KaijuuImageThree from '../../assets/image/png/kaijuu-image-3.png'
import KaijuuImageFour from '../../assets/image/png/kaijuu-image-4.png'
import KaijuuImageFive from '../../assets/image/png/kaijuu-image-5.png'
import KaijuuImageSix from '../../assets/image/png/kaijuu-image-6.png'

const HeroSlider = () => {
  return (
    <div>
        <div className='flex overflow-hidden'>
            <div className='hero-slider flex'>
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageOne} alt="ImageOne" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageTwo} alt="ImageTwo" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageThree} alt="ImageThree" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageFour} alt="ImageFour" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageFive} alt="ImageFive" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageSix} alt="ImageSix" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageOne} alt="ImageOne" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageTwo} alt="ImageTwo" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageThree} alt="ImageThree" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageFour} alt="ImageFour" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageFive} alt="ImageFive" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageSix} alt="ImageSix" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageOne} alt="ImageOne" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageTwo} alt="ImageTwo" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageThree} alt="ImageThree" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageFour} alt="ImageFour" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageFive} alt="ImageFive" />
                <img className='w-full object-cover max-h-[295px]' src={KaijuuImageSix} alt="ImageSix" />
               
            </div>
        </div>
    </div>
  )
}

export default HeroSlider
