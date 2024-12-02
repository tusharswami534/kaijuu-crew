import React from 'react'
import TraitsBgImage from '../../assets/image/webp/traits-bg-image.webp'
import TraitsImage from '../../assets/image/webp/traits-image.webp'
import CommonHeading from '../common/CommonHeading'
import CommonDescription from '../common/CommonDescription'
import { ETHCoin } from '../common/Icon'

const Traits = () => {
  return (
    <div id='traits' className='bg-no-repeat overflow-hidden bg-cover bg-center py-24 max-xl:py-20 max-lg:py-16 max-md:py-14 max-sm:py-12 -mt-0.5' style={{ backgroundImage: `url(${TraitsBgImage})` }}>
        <div className='max-w-[1320px] mx-auto max-xl:px-5'>
            <div className='text-center pb-10'>
            <CommonHeading SectionHeading={'Traits'} SectionWhiteHeading={''}/>
            </div>
            <div className='flex flex-wrap items-center'>
                <div className='w-7/12 max-lg:w-full max-lg:justify-center flex max-2xl:w-1/2'>
                    <img className='w-full pointer-events-none max-w-[738px]' src={TraitsImage} alt="traitsImage" />
                </div>
                <div className='w-5/12 max-lg:w-full flex max-lg:justify-center items-center max-2xl:w-1/2'>
                    <div className='max-w-[590px] w-full rounded-[30px] border border-white border-opacity-25 backdrop-filter px-11 py-10  max-sm:p-5 !backdrop-blur-[35px]'>
                        <div>
                            <p className='upercase text-white font-godzilla text-5xl max-lg:text-4xl leading-86 '>Traits</p>
                        </div>
                        <div className='max-w-[505px] pb-0.5 opacity-25 my-[26px] bg-white'></div>
                        <div className='flex'>
                        
                            <div className='w-1/2'>
                                <ul className='list-none'>
                                    <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Background:8</li>
                                    <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Skins:19</li>
                                    <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Headwear:37</li>
                                    <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Clothes:44</li>
                                </ul>
                            </div>
                            <div className='w-1/2'>
                                <ul className='list-none'>
                                    <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Eyes:23</li>
                                    <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Mouth:33</li>
                                    <li className='text-[22px] font-normal font-oswald leading-150 text-white'>Accessories:7</li>
                                </ul>
                            </div>
                        </div>
                        <p className='upercase text-white font-godzilla text-5xl max-lg:text-4xl leading-86 pt-14'>Stats</p>
                        <div className='max-w-[505px] pb-0.5 opacity-25 my-[26px] bg-white'></div>
                        <div className='flex'>
                            <div className='w-5/12'>
                                <p className='leading-150 text-white text-5xl max-lg:text-4xl max-md:text-3xl font-oswald font-bold'>9,999</p>
                               <CommonDescription CommonSectionDescription={'Total Kaijuu'}/>
                            </div>
                            <div className='w-7/12'>
                                <div className='flex items-center gap-3'>
                                <p className='leading-150 text-white text-5xl max-lg:text-4xl max-md:text-3xl font-oswald font-bold'>0.0555</p>
                                <ETHCoin/>
                                </div>
                            <CommonDescription CommonSectionDescription={'Mint Cost'}/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Traits
 