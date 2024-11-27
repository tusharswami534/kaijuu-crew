import React, { useState } from 'react'
import { NAV_BAR } from './Helper'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <div className='bg-smoky-back'>
      <div className='flex justify-between items-center pb-[26px] pt-[35px] max-w-[1320px] max-lg:px-4 mx-auto'>
        <div className='items-center'>
          <a className='text-ferrari-red font-godzilla text-3xl ' href="/">
          Kaijuu<span className='text-white'>Crew</span></a>
        </div>
        <button
          onClick={handleOpen}
          className={`hidden size-6 justify-center relative z-50 max-lg:flex flex-col overflow-hidden`}
        >
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md ${open ? 'translate-x-10' : ''}`}
          ></span>
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md ${open ? 'rotate-45 after:rotate-90' : ''}`}
          ></span>
          <span
            className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10' : ''}`}
          ></span>
        </button>
        <div className={`flex gap-10 max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:justify-center max-lg:items-center max-lg:bg-yellow-500 max-lg:backdrop-blur-lg  max-lg:opacity-50 max-lg:transition-all max-lg:duration-300 ${open ? 'max-lg:left-0' : 'left-full'}`}>
          {NAV_BAR.map((data, i) => (
            <a className='whitespace-nowrap font-oswald text-white leading-150 text-[22px] max-md:text-xl' href={data.link} key={i}>{data.linkName}</a>
          )
          )}
          <select className='text-white text-[22px] max-md:text-xl outline-none font-oswald bg-transparent'>
            <option className='text-black bg-transparent'>ENG</option>
            <option className='text-black bg-transparent'>Hindi</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default NavBar
