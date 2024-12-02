import React, { useState , useEffect } from 'react'
import { NAV_BAR } from './Helper'
import USA from '../../assets/image/webp/usa-logo.webp'
import HindiLogo from '../../assets/image/webp/hindi-logo.webp';

const NavBar = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const closeNavbar = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleOverflow = () => {
        if (open && window.innerWidth < 1024) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
        window.removeEventListener("resize", handleOverflow);
    };
}, [open]);

  const [language, setLanguage] = useState('ENG');
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const logo = language === 'ENG' ? USA : HindiLogo;

  return (
    <div className='bg-smoky-back'>
      <div className='flex justify-between items-center max-lg:py-4 max-xl:px-5 pb-[26px] pt-[35px] max-w-[1320px] max-lg:px-4 mx-auto'>
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
        <div className={`flex gap-10 max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:justify-center max-lg:items-center max-lg:bg-black max-lg:transition-all max-lg:duration-300 ${open ? 'max-lg:left-0' : 'left-full'}`}>
          {NAV_BAR.map((data, i) => (
            <a onClick={closeNavbar} className='whitespace-nowrap hover:text-ferrari-red transition-all duration-300 font-oswald text-white leading-150 text-[22px]' href={data.link} key={i}>{data.linkName}</a>
          )
          )}
           <div className="flex gap-3">
            <div className='cursor-not-allowed'>
      <img className='max-w-[31px] pointer-events-none' src={logo} alt="language logo" />
      </div>
      <select 
        value={language} 
        onChange={handleLanguageChange} 
        className="text-white text-[22px] max-md:text-xl cursor-pointer hover:text-ferrari-red transition-all duration-300 group outline-none font-oswald bg-transparent"
      >
        <option value="ENG" className="text-black cursor-pointer bg-transparent">ENG</option>
        <option value="HIN" className="text-black cursor-pointer bg-transparent">Hindi</option>
      </select>
    </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
