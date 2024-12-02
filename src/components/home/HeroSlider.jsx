import React from 'react'
import KaijuuImageOne from '../../assets/image/webp/kaijuu-image-1.webp'
import KaijuuImageTwo from '../../assets/image/webp/kaijuu-image-2.webp'
import KaijuuImageThree from '../../assets/image/webp/kaijuu-image-3.webp'
import KaijuuImageFour from '../../assets/image/webp/kaijuu-image-4.webp'
import KaijuuImageFive from '../../assets/image/webp/kaijuu-image-5.webp'
import KaijuuImageSix from '../../assets/image/webp/kaijuu-image-6.webp'

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
