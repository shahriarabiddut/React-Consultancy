import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PageSlogan from '../PageSlogan';

const Testimonial = () => {
    const [testimonials,setTestimonials] = useState([]);
    useEffect(()=>{
        fetch('/data/testimonial.json')
        .then(res=>res.json())
        .then(data=>setTestimonials(data))
    },[]);
    return (
        <section className='bg-gray-100'>
            <div className=" min-h-screen py-10 mx-auto w-11/12">
                <PageSlogan title={`TESTIMONIALS`} slogan={`Our Clients Vouch for Us as Bangladesh's Best`}></PageSlogan>
                <div className="grid grid-cols-1 ">
      <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        style={{
          width: '100%',
          overflow: 'hidden',
        }}
        breakpoints={{
          250: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-6 mySwiper" >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="card shadow-xl px-6 py-8 rounded-lg gap-2 my-2 flex-col items-center bg-teal-50">
              <p className=" font-bold text-gray-500 mb-2 font-montserrat">Customer Testimonial</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <div className="rating">
                      {[...Array(5)].map((_, index) => (
                          <input
                          key={index}
                          type="radio"
                          className={`mask mask-star-2 ${index < testimonial.rating ? 'bg-teal-800' : 'bg-gray-300'}`}
                          disabled
                          />
                      ))}
                  </div>
                <p className="text-gray-700 text-center mb-4">{testimonial.testimonial}</p>
              
                      </div>
              </SwiperSlide>
                  ))}
                </Swiper>
              </div>
                </div>
        </section>
    );
};

export default Testimonial;