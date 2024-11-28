import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonDescription from '../common/CommonDescription'
import CommonBtn from '../common/CommonBtn'
import AboutImageOne from '../../assets/image/png/about-image-1.png'
import AboutImageTwo from '../../assets/image/png/about-image-2.png'
import AboutImageThree from '../../assets/image/png/about-image-3.png'
import AboutImageFour from '../../assets/image/png/about-image-4.png'

const About = () => {
  return (
    <div id='about' className='bg-blue-charcoal -mt-0.5 py-24 max-xl:py-20 max-lg:py-16 max-md:py-14 max-sm:py-12'>
        <div className='max-w-[1320px] max-xl:px-5 mx-auto'>
            <div className='flex flex-wrap'>
                <div className="w-1/2 max-lg:w-full flex flex-col justify-center">
                    <div>
                        <CommonHeading SectionHeading={'About'} SectionWhiteHeading={'Us'}/>
                    </div>
                    <div className='pt-7 max-w-[648px]'>
                        <CommonDescription CommonSectionDescription={"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}/>
                    </div>
                    <div className='pt-[34px]'>
                        <CommonBtn SectionCommonBtn={"Mint NFT"}/>
                    </div>
                </div>
                <div className='w-1/2 xl:translate-x-[49px] max-xl:translate-x- max-lg:w-full'>
                    <div className='flex flex-wrap max-lg:gap-10'>
                        <div className='max-md:w-full w-1/2 flex  flex-col max-md:items-center items-end justify-end'>
                        <img src={AboutImageOne} alt="imageOne" />
                        <img src={AboutImageThree} alt="imageOne" />
                        </div>
                        <div className='max-md:w-full w-1/2 flex  flex-col items-end max-md:items-center justify-end'>
                        <img src={AboutImageTwo} alt="imageOne" />
                        <img src={AboutImageFour} alt="imageOne" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
