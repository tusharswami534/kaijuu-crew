import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { NextArrow, PrveArrow } from '../common/Icon';
import CommonHeading from '../common/CommonHeading';
import { TEAM_SLIDER } from '../common/Helper';

const TeamSlider = () => {
  return (
    <div id='team' className='bg-blue-charcoal overflow-hidden -mt-0.5 pt-[72px] pb-[130px] max-xl:py-[60px] max-md:py-[40px]'>
      <div className="max-w-[1320px] mx-auto relative">
        <div className='text-center pb-[55px] max-sm:pb-8'>
        <CommonHeading SectionHeading={"Team"}/>
        </div>
        <button className="custom-prev-btn absolute left-[-7%] top-[65%] max-xl:hidden  max-2xl:hidden"> <PrveArrow/> </button>
        <button className="custom-next-btn  absolute right-[-7%] top-[65%]  max-xl:hidden max-2xl:hidden"><NextArrow/> </button>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: '.custom-prev-btn',
            nextEl: '.custom-next-btn',
          }}
          modules={[Autoplay, Navigation]} 
          className="mySwiper"
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
           
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides : true
            },
           
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
        
          {TEAM_SLIDER.map((item, index) => (
             <SwiperSlide key={index}>
             <div className='flex flex-col'>
             <img src={item.imgSrc} alt="SliderImage" />
             <p className='leading-120 text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-white font-Righteous text-center'>{item.cardHeading}</p>
             <p className='leading-120 text-lg max-lg:text-base text-white text-center font-Righteous mt-2 max-md:mt-1'>{item.cardDescription}</p>
             </div>
           </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;
