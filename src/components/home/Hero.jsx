import React from 'react'
import HeroBgImage from '../../assets/image/png/hero-bg-image.png'
import Countdown from './Countdown'
import HeroImage from '../../assets/image/png/hero-image.png'
import { DiscordIcon } from '../common/Icon'
import HeroSlider from './HeroSlider'

const Hero = () => {
  return (
    <div className='bg-no-repeat overflow-hidden bg-cover bg-center' style={{ backgroundImage: `url(${HeroBgImage})` }}>
        <div className='max-w-[1320px] max-xl:px-5 pt-[55px] pb-3 mx-auto'>
          <div className='flex flex-wrap max-lg:gap-10'>
            <div className='w-5/12 max-lg:w-full'>
              <div>
                <h1 className='text-ferrari-red font-godzilla text-[145.44px] max-xl:text-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl leading-115'>Kaijuu<span className='text-white'> Crew </span> </h1>
                <p className='lg:max-w-[368px] text-[22px] text-white font-oswald'>
                The ocean surges with spray and foam,
As Kaijuu rise from depth to roam.
Thirty-three hundred, and thirty-three more,
Decked in garbs from days of yore.
We scour the earth and sea and air,
Our mission so grave few would dare.
In search of untold wealth to hoard?
Nay, but 'cause your Apes are Bored.

                </p>
                <Countdown/>
                <div className='flex gap-4 max-sm:flex-col'>
                  <button className='hover:scale-110 whitespace-nowrap w-max transition-all-ease duration-300  py-3 flex uppercase font-bold leading-150 bg-ferrari-red text-lg px-9 rounded-[7px] text-white items-center gap-[11px]' >
                    <DiscordIcon/>
                  join discord
                  </button>
                  <button className='hover:scale-110 whitespace-nowrap w-max transition-all-ease duration-300  py-3 flex uppercase font-bold leading-150 bg-ferrari-red text-lg px-9 rounded-[7px] text-white items-center gap-[11px]' >
                  Connect Wallet
                  </button>
                </div>
              </div>
            </div>
            <div className='w-7/12 flex justify-center lg:justify-end max-lg:w-full'>
              <img src={HeroImage} alt="hero-image" />
            </div>
          </div>
        </div>
        <HeroSlider/>
    </div>
  )
}

export default Hero
