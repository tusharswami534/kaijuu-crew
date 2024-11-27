import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules from swiper
import { Autoplay, Navigation } from 'swiper/modules';

// Importing images
import SldierImageOne from '../../assets/image/png/team-slider-image-1.png';
import SldierImageTwo from '../../assets/image/png/team-slider-image-2.png';
import { NextArrow, PrveArrow } from '../common/Icon';

const TeamSlider = () => {
  return (
    <div className='bg-blue-charcoal'>
      <div className="max-w-[1320px] mx-auto relative">
        {/* Custom navigation buttons */}
        <button className="custom-prev-btn absolute left-[-7%] top-1/2 max-xl:hidden "> <PrveArrow/> </button>
        <button className="custom-next-btn  absolute right-[-7%] top-1/2  max-xl:hidden"><NextArrow/> </button>

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
          modules={[Autoplay, Navigation]} // Using the modules here
          className="mySwiper"
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
