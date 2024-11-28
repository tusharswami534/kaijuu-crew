import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

import SldierImageOne from '../../assets/image/png/team-slider-image-1.png';
import SldierImageTwo from '../../assets/image/png/team-slider-image-2.png';
import { NextArrow, PrveArrow } from '../common/Icon';
import CommonHeading from '../common/CommonHeading';

const TeamSlider = () => {
  return (
    <div id='team' className='bg-blue-charcoal -mt-0.5 '>
      <div className="max-w-[1320px] mx-auto relative">
        <div className='text-center'>
        <CommonHeading SectionHeading={"Team"}/>
        </div>
        <button className="custom-prev-btn absolute left-[-7%] top-1/2 max-xl:hidden  max-2xl:hidden"> <PrveArrow/> </button>
        <button className="custom-next-btn  absolute right-[-7%] top-1/2  max-xl:hidden max-2xl:hidden"><NextArrow/> </button>

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
          <SwiperSlide>
            <img src={SldierImageOne} alt="SliderImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SldierImageTwo} alt="SliderImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SldierImageTwo} alt="SliderImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SldierImageOne} alt="SliderImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SldierImageTwo} alt="SliderImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SldierImageTwo} alt="SliderImage" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;
