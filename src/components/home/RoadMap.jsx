import React from 'react'
import CommonDescription from '../common/CommonDescription'
import RoadMapPentagon from '../../assets/image/png/roadmap-pentagon.png'
import RoadMapTopLine from '../../assets/image/png/roadmap-top-line.png'
import RoadMapLine from '../../assets/image/png/roadmap-line.png'

const RoadMap = () => {
  return (
    <div className='lg:min-h-[1024px] bg-blue-charcoal '>
        <div className='max-w-[1320px] mx-auto w-full lg:min-h-[1024px] relative'>
            <img className='absolute top-[48%] left-[17%]' src={RoadMapLine} alt="RoadmapLine" />
            <img className='absolute top-[48%] rotate-[54deg] left-[34%]' src={RoadMapLine} alt="RoadmapLine" />
            {/* Roadmap Item  1 */}
            <div className=''>
                <div className='absolute top-[20%] left-[2%]'>
                    <ul>
                        <li className='list-disc text-white'>
                            <CommonDescription CommonSectionDescription={"Ut eu ac sed duis nec amet."} />
                        </li>
                        <li className='list-disc text-white'>
                            <CommonDescription CommonSectionDescription={"Sed elementum a tortor eros."} />
                        </li>
                    </ul>
                </div>
                <div className='absolute !top-[30%]'>
                    <div className='relative w-max'>
                    <img className='relative z-20' src={RoadMapPentagon} alt="Pentagon" />
                    <p className='text-[40px] z-20 font-Righteous leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    2021
                    <span className='block'>December</span>
                    </p>
                    <img className='absolute z-10 -top-[12%] left-1/2' src={RoadMapTopLine} alt="RoadmapTopLine" />
                    </div>
                </div>
            </div>
            {/* Roadmap Item  2 */}
            <div className=''>
                <div className='absolute bottom-[13%] left-[20%] max-w-[367px]'>
                    <ul>
                        <li className='list-disc text-white'>
                            <CommonDescription CommonSectionDescription={"Sagittis tristique molestie eu pharetra."} />
                        </li>
                        <li className='list-disc text-white'>
                            <CommonDescription CommonSectionDescription={"Nibh convallis ornare fringilla diam proin volutpat aliquet nunc."} />
                        </li>
                    </ul>
                </div>
                <div className='absolute top-[48%] left-[20%]'> 
                    <div className='relative w-max'>
                    <img className='relative z-20' src={RoadMapPentagon} alt="Pentagon" />
                    <p className='text-[40px] z-20 font-Righteous leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    2022
                    <span className='block'>Feburary</span>
                    </p>
                    <img className='absolute z-10 rotate-180 -bottom-[12%] left-1/2' src={RoadMapTopLine} alt="RoadmapTopLine" />
                    </div>
                </div>
            </div>
            {/* RoadMap Item 3 */}
            <div className=''>
                <div className='absolute top-[20%] left-[20%] max-w-[367px]'>
                    <ul>
                        <li className='list-disc text-white'>
                            <CommonDescription CommonSectionDescription={"Sagittis tristique molestie eu pharetra."} />
                        </li>
                        <li className='list-disc text-white'>
                            <CommonDescription CommonSectionDescription={"Nibh convallis ornare fringilla diam proin volutpat aliquet nunc."} />
                        </li>
                    </ul>
                </div>
                <div className='absolute top-[30%] left-[40%]'> 
                    <div className='relative w-max'>
                    <img className='relative z-20' src={RoadMapPentagon} alt="Pentagon" />
                    <p className='text-[40px] z-20 font-Righteous leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    2022
                    <span className='block'>Feburary</span>
                    </p>
                    <img className='absolute z-10 rotate-180 -bottom-[12%] left-1/2' src={RoadMapTopLine} alt="RoadmapTopLine" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoadMap
