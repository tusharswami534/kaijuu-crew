import React from 'react'
import CrewScouts from '../../assets/image/png/crew-class-scouts.png'
import CrewHeavies from '../../assets/image/png/crew-class-heavies.png'
import CrewLegends from '../../assets/image/png/crew-class-legends.png'
import CrewElementals from '../../assets/image/png/crew-class-elementals.png'
import CrewBgImage from '../../assets/image/png/crew-class-bg-image.png'
import CommonHeading from '../common/CommonHeading'


const KaijuuCrewClasses = () => {
  return (
    <div className='bg-no-repeat overflow-hidden bg-cover bg-center pt-[171px] pb-[225px] max-lg:py-[60px] max-md:py-[40px] max-sm:py-[30px] ' style={{ backgroundImage: `url(${CrewBgImage})` }} >
        <div className='text-center pb-[85px]'>
        <CommonHeading SectionHeading="Kaijuu" SectionWhiteHeading=" Crew Classes"/>
        </div>
        <div className='flex mx-auto max-w-[1794px] justify-between max-2xl:px-5 max-xl:gap-10 flex-wrap max-xl:justify-center'>
            <img src={CrewScouts} alt="CrewScouts" />
            <img src={CrewHeavies} alt="Crewheavies" />
            <img src={CrewLegends} alt="CrewLegends" />
            <img src={CrewElementals} alt="CrewElementals" />
            <img src={CrewLegends} alt="CrewLegends" />
        </div>
    </div>
  )
}

export default KaijuuCrewClasses
