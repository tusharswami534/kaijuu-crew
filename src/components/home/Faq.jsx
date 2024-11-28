import React, { useRef, useState } from 'react';
import CommonHeading from '../common/CommonHeading';
import FooterBgImage from '../../assets/image/png/footer-bg-image.png'
import Footer from '../common/Footer';

const Faq = () => {
    // Set initial state to 0 so that the first item is open by default
    const [activeIndex, setActiveIndex] = useState(0);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div  style={{ backgroundImage: `url(${FooterBgImage})` }} className="bg-faq bg-cover bg-no-repeat bg-center -mt-[1px] relative  max-lg:py-[60px] max-md:py-[40px] max-sm:py-[30px]" id="faq">
            <div className="max-w-[1320px] max-xl:px-5 mx-auto pb-[192px] max-lg:pb-[50px] max-md:pb-[30px] max-sm:pb-[20px]">
                <div className='flex items-end text-center justify-center'>
                    <CommonHeading SectionHeading={'FAQ'}/><p className='text-white text-[40px] font-godzilla'>S</p>
                </div>
                <div className="mt-14 max-lg:mt-12 max-sm:mt-8 max-w-[830px] mx-auto">
                    {/* FAQ Item 1 */}
                    <div className="backdrop-blur-[35px] rounded-[10px] mb-[17px] border border-white border-solid border-opacity-25 backdrop-filter transition-all duration-300">
                        <button
                            onClick={() => toggleAccordion(0)}
                            className="flex py-[17.5px] px-8 items-center justify-between font-oswald w-full text-white text-[22px] max-md:text-lg leading-150 font-bold max-sm:p-4"
                        >
                            <span>Volutpat gravida sapien in purus</span>
                            <svg
                                className={`transform transition-transform duration-300 ${activeIndex === 0 ? 'rotate-0' : 'rotate-180'}`}
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.63729 8L5.5 3.17708L1.36271 8L0 6.41146L5.5 0L11 6.41146L9.63729 8Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <div
                            ref={(el) => (contentRefs.current[0] = el)}
                            style={{
                                height: activeIndex === 0 ? `${contentRefs.current[0]?.scrollHeight}px` : '0px',
                            }}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                        >
                            <div className="max-sm:p-[0_16px_16px_16px] pb-5 px-8 pt-[14px] text-white font-oswald text-[22px] max-md:text-lg  font-normal leading-150">
                                Ac pretium feugiat sed id ut viverra nunc lacus, pulvinar purus malesuada adipiscing nisl nullam mi diam sit nisi consectetur non etiam diam.
                            </div>
                        </div>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="backdrop-blur-[35px] rounded-[10px] mb-[17px] border border-white border-solid border-opacity-25 backdrop-filter transition-all duration-300">
                        <button
                            onClick={() => toggleAccordion(1)}
                            className="flex py-[17.5px] px-8 items-center justify-between font-oswald w-full text-white text-[22px] max-md:text-lg leading-150 font-bold max-sm:p-4"
                        >
                            <span>Volutpat gravida sapien in purus</span>
                            <svg
                                className={`transform transition-transform duration-300 ${activeIndex === 1 ? 'rotate-0' : 'rotate-180'}`}
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.63729 8L5.5 3.17708L1.36271 8L0 6.41146L5.5 0L11 6.41146L9.63729 8Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <div
                            ref={(el) => (contentRefs.current[1] = el)}
                            style={{
                                height: activeIndex === 1 ? `${contentRefs.current[1]?.scrollHeight}px` : '0px',
                            }}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                        >
                            <div className="max-sm:p-[0_16px_16px_16px] pb-5 px-8 pt-[14px] text-white font-oswald text-[22px] max-md:text-lg  font-normal leading-150">
                                Ac pretium feugiat sed id ut viverra nunc lacus, pulvinar purus malesuada adipiscing nisl nullam mi diam sit nisi consectetur non etiam diam.
                            </div>
                        </div>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="backdrop-blur-[35px] rounded-[10px] mb-[17px] border border-white border-solid border-opacity-25 backdrop-filter transition-all duration-300">
                        <button
                            onClick={() => toggleAccordion(2)}
                            className="flex py-[17.5px] px-8 items-center justify-between font-oswald w-full text-white text-[22px] max-md:text-lg leading-150 font-bold max-sm:p-4"
                        >
                            <span>Volutpat gravida sapien in purus</span>
                            <svg
                                className={`transform transition-transform duration-300 ${activeIndex === 2 ? 'rotate-0' : 'rotate-180'}`}
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.63729 8L5.5 3.17708L1.36271 8L0 6.41146L5.5 0L11 6.41146L9.63729 8Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <div
                            ref={(el) => (contentRefs.current[2] = el)}
                            style={{
                                height: activeIndex === 2 ? `${contentRefs.current[2]?.scrollHeight}px` : '0px',
                            }}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                        >
                            <div className="max-sm:p-[0_16px_16px_16px] pb-5 px-8 pt-[14px] text-white font-oswald text-[22px] max-md:text-lg  font-normal leading-150">
                                Ac pretium feugiat sed id ut viverra nunc lacus, pulvinar purus malesuada adipiscing nisl nullam mi diam sit nisi consectetur non etiam diam.
                            </div>
                        </div>
                    </div>

                    {/* FAQ Item 4 */}
                    <div className="backdrop-blur-[35px] rounded-[10px] mb-[17px] border border-white border-solid border-opacity-25 backdrop-filter transition-all duration-300">
                        <button
                            onClick={() => toggleAccordion(3)}
                            className="flex py-[17.5px] px-8 items-center justify-between font-oswald w-full text-white text-[22px] max-md:text-lg leading-150 font-bold max-sm:p-4"
                        >
                            <span>Volutpat gravida sapien in purus</span>
                            <svg
                                className={`transform transition-transform duration-300 ${activeIndex === 3 ? 'rotate-0' : 'rotate-180'}`}
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.63729 8L5.5 3.17708L1.36271 8L0 6.41146L5.5 0L11 6.41146L9.63729 8Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <div
                            ref={(el) => (contentRefs.current[3] = el)}
                            style={{
                                height: activeIndex === 3 ? `${contentRefs.current[3]?.scrollHeight}px` : '0px',
                            }}
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                        >
                            <div className="max-sm:p-[0_16px_16px_16px] pb-5 px-8 pt-[14px] text-white font-oswald text-[22px] max-md:text-lg  font-normal leading-150">
                                Ac pretium feugiat sed id ut viverra nunc lacus, pulvinar purus malesuada adipiscing nisl nullam mi diam sit nisi consectetur non etiam diam.
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <Footer/>
        </div>
    );
};

export default Faq;
