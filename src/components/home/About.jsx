import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonDescription from '../common/CommonDescription'
import CommonBtn from '../common/CommonBtn'
import AboutImageOne from '../../assets/image/webp/about-image-1.webp'
import AboutImageTwo from '../../assets/image/webp/about-image-2.webp'
import AboutImageThree from '../../assets/image/webp/about-image-3.webp'
import AboutImageFour from '../../assets/image/webp/about-image-4.webp'

const About = () => {
  return (
    <div id='about' className='bg-blue-charcoal overflow-hidden -mt-0.5 pt-[61px] pb-[135px] max-xl:py-[60px] max-md:py-[40px]'>
        <div className='max-w-[1320px] max-xl:px-5 mx-auto'>
            <div className='flex flex-wrap gap-y-10'>
                <div className="w-1/2 max-lg:w-full flex flex-col justify-center">
                    <div className='max-lg:text-center'>
                        <CommonHeading SectionHeading={'About'} SectionWhiteHeading={'Us'}/>
                    </div>
                    <div className='pt-7 lg:max-w-[648px] max-lg:text-center'>
                        <CommonDescription CommonSectionDescription={"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}/>
                    </div>
                    <div className='pt-[34px] max-lg:justify-center flex '>
                        <CommonBtn SectionCommonBtn={"Mint NFT"}/>
                    </div>
                </div>
                <div className='w-1/2 xl:translate-x-[49px] max-xl:translate-x- max-lg:w-full'>
                    <div className='flex flex-wrap'>
                        <div className='max-md:w-full w-1/2 flex  flex-col max-lg:items-center items-end justify-end'>
                        <img src={AboutImageOne} alt="imageOne" />
                        <img src={AboutImageThree} alt="imageOne" />
                        </div>
                        <div className='max-md:w-full w-1/2 flex lg:!translate-x-0 md:translate-x-[-30px] flex-col items-end max-lg:items-center max-md:items-center justify-end'>
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
