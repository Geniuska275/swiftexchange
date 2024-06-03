import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Swipers() {
  return (    
    <div>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
    
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={()=>{}}
        onSwiper={swiper=>console.log(swiper)}
        >
            <SwiperSlide>slide1</SwiperSlide>
            <SwiperSlide>slide1</SwiperSlide>
            <SwiperSlide>slide1</SwiperSlide>
            <SwiperSlide>slide1</SwiperSlide>
            <SwiperSlide>slide1</SwiperSlide>


        </Swiper>
   </div>
  )
}

export default Swipers;