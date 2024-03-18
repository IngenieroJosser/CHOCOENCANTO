import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import '../../style/scss/components/home/_viewPlace.scss'
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

const ViewPlace = () =>{
    const img1 = 'src/assets/img/Sunset.jpg';
    const img2 = 'src/assets/img/place2.jpeg';
    const img3 = 'src/assets/img/Ship.jpeg';
    const img4 = 'src/assets/img/place4.jpeg';

return (
    <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img className='servicies-img' src={img1} alt="#" /></SwiperSlide>
            <SwiperSlide><img className='servicies-img' src={img1} alt="#" /></SwiperSlide>
            <SwiperSlide><img className='servicies-img' src={img2} alt="#" /></SwiperSlide>
            <SwiperSlide><img className='servicies-img' src={img1} alt="#" /></SwiperSlide>
            <SwiperSlide><img className='servicies-img' src={img3} alt="#" /></SwiperSlide>
            <SwiperSlide><img className='servicies-img' src={img4} alt="#" /></SwiperSlide>
            <SwiperSlide><img className='servicies-img' src={img1} alt="#" /></SwiperSlide>
        </Swiper>
    </>
    );
}

export default ViewPlace;