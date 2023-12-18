"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image src="/images/bannerprueba.png" width={850} height={450} className="test_img"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/bannerprueba1.jpg" width={850} height={450} className="test_img"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/bannerprueba2.jpg" width={850} height={450} className="test_img"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/bannerprueba3.jpg" width={850} height={450} className="test_img"/>
        </SwiperSlide>

      </Swiper>
    </>
  );
}