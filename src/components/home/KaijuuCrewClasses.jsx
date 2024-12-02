import React from 'react'
import CrewScouts from '../../assets/image/webp/crew-class-scouts.webp'
import CrewHeavies from '../../assets/image/webp/crew-class-heavies.webp'
import CrewLegends from '../../assets/image/webp/crew-class-legends.webp'
import CrewElementals from '../../assets/image/webp/crew-class-elementals.webp'
import CrewBgImage from '../../assets/image//webp/crew-class-bg-image.webp'
import CommonHeading from '../common/CommonHeading'


const KaijuuCrewClasses = () => {
  return (
    <div className='bg-no-repeat overflow-hidden bg-cover bg-center pt-[171px] pb-[225px] max-xl:py-[60px] max-md:py-[40px] max-sm:py-[30px] -mt-0.5' style={{ backgroundImage: `url(${CrewBgImage})` }} >
        <div className='text-center pb-[85px] max-lg:pb-[50px] max-md:pb-[40px] max-sm:pb-[30px]'>
        <CommonHeading SectionHeading="Kaijuu" SectionWhiteHeading=" Crew Classes"/>
        </div>
        <div className='flex mx-auto max-w-[1794px] justify-between max-2xl:px-5 max-xl:gap-10 flex-wrap max-xl:justify-center'>
          <div>
            <img src={CrewScouts} alt="CrewScouts" />
            <p className='text-white text-[36px] leading-150 font-semibold text-center font-oswald mt-3'>Scouts</p>
          </div>
          <div>
            <img src={CrewHeavies} alt="Crewheavies" />
            <p className='text-white text-[36px] leading-150 font-semibold text-center font-oswald mt-3'>Heavies</p>
          </div>
          <div>
            <img src={CrewLegends} alt="CrewLegends" />
            <p className='text-white text-[36px] leading-150 font-semibold text-center font-oswald mt-3'>Legends</p>
          </div>
          <div>
            <img src={CrewElementals} alt="CrewElementals" />
            <p className='text-white text-[36px] leading-150 font-semibold text-center font-oswald mt-3'>Elementals</p>
          </div>
          <div>
            <img src={CrewLegends} alt="CrewLegends" />
            
            <p className='text-white text-[36px] leading-150 font-semibold text-center font-oswald mt-3'>???</p>
          </div>
        </div>
    </div>
  )
}

export default KaijuuCrewClasses
