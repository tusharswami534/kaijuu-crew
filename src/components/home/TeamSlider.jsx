import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Navigation } from 'swiper';
import SldierImageOne from '../../assets/image/png/team-slider-image-1.png';
import SldierImageTwo from '../../assets/image/png/team-slider-image-2.png';

const TeamSlider = () => {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto">
        {/* Custom navigation buttons */}
        <button className="custom-prev-btn">Previous</button>
        <button className="custom-next-btn">Next</button>

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
            prevEl: '.custom-prev-btn', // Connect the custom prev button
            nextEl: '.custom-next-btn', // Connect the custom next button
          }}
          modules={[Autoplay, Navigation]}
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
