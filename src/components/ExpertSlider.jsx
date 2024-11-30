import React, { useEffect, useState } from 'react';
import { FaEye, FaLanguage } from 'react-icons/fa';
import { FaFilePen, FaLocationDot } from 'react-icons/fa6';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const ExpertSlider = () => {
    const [instructors,setInstructors] = useState([]);
    useEffect(()=>{
        fetch('/data/instructor.json')
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[]);
    return (
      <> 
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
        {instructors.map((instructor) => (
          <SwiperSlide key={instructor.id}>
            <div className="flex bg-base-100">
            <div className="flex-1 card shadow-xl px-6 py-8 rounded-lg gap-2 my-2 flex-col items-center ">
              <figure className=''>
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              </figure>
              <div className="p-4 ">
                <h2 className="card-title flex justify-center items-center gap-2">{instructor.name}</h2>
                <div className="text-[14px] grid  gap-3 my-2">
                <div className="flex items-center gap-2"><FaLocationDot/> <strong>City:</strong> {instructor.city} </div>
                <div className="flex items-center gap-2"><FaFilePen/> <strong>Experience:</strong> {instructor.experience} years </div>
                <div className="flex items-center gap-2"><FaLanguage/> <strong>Languages:</strong> {instructor.languages.join(", ")} </div>
                </div>
                <div className="card-actions justify-end my-3">
                  <button className="bg-teal-700 text-white p-3 font-semibold font-montserrat cursor-pointer hover:bg-white hover:border hover:border-gray-400 hover:text-teal-900 rounded-lg flex gap-2 items-center justify-center w-full"> <FaEye/> View Profile</button>
                </div>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
                </Swiper>
      </>
    );
};

export default ExpertSlider;