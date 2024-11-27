import React from 'react'
import CommonDescription from '../common/CommonDescription'
import RoadMapPentagon from '../../assets/image/png/roadmap-pentagon.png'
import RoadMapTopLine from '../../assets/image/png/roadmap-top-line.png'
import RoadMapBottomLine from '../../assets/image/png/roadmap-botom-line.png'
import RoadMapLine from '../../assets/image/png/roadmap-line.png'
import RoadMapLineTwo from '../../assets/image/png/roadmap-line-2.png'
import RoadMapLineThree from '../../assets/image/png/roadmap-line-3.png'
import RoadMapLineFour from '../../assets/image/png/roadmap-line-4.png'


const RoadMap = () => {

  return (
    <div className='lg:min-h-[1024px] bg-blue-charcoal '>
        <div className='max-w-[1320px] max-xl:px-10 max-xl:py-20 mx-auto w-full lg:min-h-[1024px] relative'>
            <img className='absolute top-[48%] left-[17%] max-xl:hidden' src={RoadMapLine} alt="RoadmapLine" />
            <img className='absolute top-[48%] left-[36.5%] max-xl:hidden' src={RoadMapLineTwo} alt="RoadmapLine" />
            <img className='absolute top-[48%] left-[56%] max-xl:hidden' src={RoadMapLineThree} alt="RoadmapLine" />
            <img className='absolute top-[48%] left-[75%] max-xl:hidden' src={RoadMapLineFour} alt="RoadmapLine" />
            <div className='w-0.5 h-full min-h-[1024px] hidden max-xl:block absolute left-1/2 translate-x-[-50%] bg-white'></div>
            {/* Roadmap Item  1 */}
            <div className='max-xl:flex roadmap-item max-xl:flex-col-reverse max-xl:w-max max-xl:gap-10'>
                <div className='absolute max-xl:relative xl:top-[20%] xl:left-[2%]'>
                    <ul>
                        <li className='list-disc max-xl:max-w-[367px]  text-white'>
                            <CommonDescription CommonSectionDescription={"Ut eu ac sed duis nec amet."} />
                        </li>
                        <li className='list-disc max-xl:max-w-[367px]  text-white'>
                            <CommonDescription CommonSectionDescription={"Sed elementum a tortor eros."} />
                        </li>
                    </ul>
                </div>
                <div className='absolute max-xl:relative  xl:!top-[30%]'>
                    <div className='relative w-max'>
                    <img className='relative z-20' src={RoadMapPentagon} alt="Pentagon" />
                    <p className='text-[40px] z-20 font-Righteous leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    2021
                    <span className='block'>December</span>
                    </p>
                    <img className='absolute z-10 max-xl:rotate-180 max-xl:!top-[98%] -top-[12%] left-1/2' src={RoadMapTopLine} alt="RoadmapTopLine" />
                    </div>
                </div>
            </div>
            {/* Roadmap Item  2 */}
            <div className='max-xl:flex roadmap-item max-xl:flex-col-reverse max-xl:w-max max-xl:ml-auto max-xl:gap-10'>
                <div className='absolute max-xl:relative xl:bottom-[13%] xl:left-[20%] max-xl:ml-auto max-w-[367px]'>
                    <ul>
                        <li className='list-disc max-xl:max-w-[367px]  text-white'>
                            <CommonDescription CommonSectionDescription={"Sagittis tristique molestie eu pharetra."} />
                        </li>
                        <li className='list-disc max-xl:max-w-[367px]  text-white'>
                            <CommonDescription CommonSectionDescription={"Nibh convallis ornare fringilla diam proin volutpat aliquet nunc."} />
                        </li>
                    </ul>
                </div>
                <div className='absolute max-xl:relative xl:top-[48%] xl:left-[20%] max-xl:mx-auto'> 
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
            <div className='max-xl:flex roadmap-item max-xl:flex-col-reverse max-xl:w-max max-xl:gap-10'>
                <div className='absolute max-xl:relative  xl:top-[20%] xl:left-[40%] max-w-[367px]'>
                    <ul>
                        <li className='list-disc max-xl:max-w-[367px]  text-white'>
                            <CommonDescription CommonSectionDescription={"Adipiscing velit turpis pretium, tellus."} />
                        </li>
                        <li className='list-disc max-xl:max-w-[367px]  text-white'>
                            <CommonDescription CommonSectionDescription={"Ornare urna arcu, dolor vestibulum."} />
                        </li>
                    </ul>
                </div>
                <div className='absolute max-xl:relative  xl:top-[30%] xl:left-[40%]'> 
                    <div className='relative w-max'>
                    <img className='relative z-20' src={RoadMapPentagon} alt="Pentagon" />
                    <p className='text-[40px] z-20 font-Righteous leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    2022
                    <span className='block'>Feburary</span>
                    </p>
                    <img className='absolute z-10 -top-[12%] left-1/2 max-xl:hidden' src={RoadMapTopLine} alt="RoadmapTopLine" />
                    <img className='absolute z-10 -bottom-[12%] left-1/2' src={RoadMapBottomLine} alt="RoadmapTopLine" />
                    </div>
                </div>
            </div>
            {/* RoadMap Item 4 */}
            <div className='max-xl:flex roadmap-item max-xl:flex-col-reverse max-xl:w-max max-xl:ml-auto max-xl:gap-10'>
                <div className='absolute max-xl:relative  xl:bottom-[13%] xl:left-[60%] '>
                    <ul>
                        <li className='list-disc max-xl:max-w-[367px]  text-white'>
                            <CommonDescription CommonSectionDescription={"Eget imperdiet mauris interdum ut egestas lacinia lacus."} />
                        </li>
                        <li className='list-disc max-xl:max-w-[367px]  text-white max-w-[367px]'>
                            <CommonDescription CommonSectionDescription={"Non ipsum, cursus consectetur fringilla aliquam."} />
                        </li>
                    </ul>
                </div>
                <div className='absolute max-xl:relative  xl:top-[48%] max-xl:mx-auto xl:left-[60%]'> 
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
            {/* Roadmap Item 5 */}
            <div className='max-xl:flex roadmap-item max-xl:flex-col-reverse max-xl:w-max max-xl:gap-10'>
                <div className='absolute max-xl:relative  xl:top-[20%] xl:left-[80%] '>
                    <ul>
                        <li className='list-disc max-xl:max-w-[367px]  text-white'>
                            <CommonDescription CommonSectionDescription={"Elementum elementum sit mauris amet non."} />
                        </li>
                    </ul>
                </div>
                <div className='absolute max-xl:relative  xl:top-[30%] max-xl:mx-auto xl:left-[80%]'> 
                    <div className='relative w-max'>
                    <img className='relative z-20' src={RoadMapPentagon} alt="Pentagon" />
                    <p className='text-[40px] z-20 font-Righteous leading-120 text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    2022
                    <span className='block'>Feburary</span>
                    </p>
                    <img className='absolute z-10 -top-[12%] left-1/2' src={RoadMapTopLine} alt="RoadmapTopLine" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoadMap
