import React from 'react'
import { BoatIcon, DiscordIconFooter, InstagramIcon, TwitterIcon } from './Icon'
import CommonDescription from './CommonDescription'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className='flex items-center justify-center flex-col pb-[60px]'>
        <div>
            <p className='font-godzilla font-normal text-ferrari-red leading-[100%] text-4xl max-md:text-3xl max-sm:text-2xl '>Kaijuu<span className='text-white'>Crew</span> </p>
        </div>
        <div className='flex gap-6 pt-7'>
            <a target='blank' href="https://x.com/?mx=2"> <TwitterIcon/> </a>
            <a target='blank' href="https://discord.com/"> <DiscordIconFooter/> </a>
            <a target='blank' href="https://www.instagram.com/"> <InstagramIcon/> </a>
            <a target='blank' href="https://www.instagram.com/"> <BoatIcon/> </a>
        </div>
        <div className='pt-7'>
        <CommonDescription CommonSectionDescription={`Copyright © Kaijuu Crew ${year}`}/>
        </div>
    </div>
  )
}

export default Footer
