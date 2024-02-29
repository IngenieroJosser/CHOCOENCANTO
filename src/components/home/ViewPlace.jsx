import { Swiper, SwiperSlide } from 'swiper/react';
import '../../style/scss/components/home/_viewPlace.scss'

// Import Swiper styles
import 'swiper/swiper-bundle.css';

const ViewPlace = () =>{
    const img1 = 'src/assets/img/Sunset.jpg';
    const img2 = 'src/assets/img/place2.jpeg';
    const img3 = 'src/assets/img/Ship.jpeg';
    const img4 = 'src/assets/img/place4.jpeg';

return (
    <>
        
        <div className="swiper">
            
            <Swiper
                direction="horizontal"
                loop
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ el: '.swiper-pagination' }}
                scrollbar={{ el: '.swiper-scrollbar' }}
            >
                <SwiperSlide><img className='servicies-img' src={img1} alt="#" /></SwiperSlide>
                <SwiperSlide><img className='servicies-img' src={img2} alt="#" /></SwiperSlide>
                <SwiperSlide><img className='servicies-img' src={img3} alt="#" /></SwiperSlide>
                <SwiperSlide><img className='servicies-img' src={img4} alt="#" /></SwiperSlide>
            </Swiper>
                {/* <div className="swiper-button-prev"></div> */}
                {/* <div className="swiper-button-next"></div> */}
                <div className="swiper-pagination"></div>
                <div className="swiper-scrollbar"></div>
        </div>
    </>
    );
}

export default ViewPlace;