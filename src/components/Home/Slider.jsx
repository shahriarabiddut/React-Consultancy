import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../../assets/hero1.jpg';
import hero2 from '../../assets/hero2.jpg';
import hero3 from '../../assets/hero3.jpg';

const Slider = () => {
  const images = [hero1, hero2, hero3];

  return (
    <div className='flex justify-center items-center'>
      <Swiper
        effect="fade"  
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}  
        style={{
          width: '100%',
          height: '400px',
          overflow: 'hidden',
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-full"
              style={{ width: '85%', height: '85%', objectFit: 'cover' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
