import '../../style/scss/components/home/_ourservicies.scss'

import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

import img1 from '../../assets/img/place1.avif'
import img2 from '../../assets/img/place2.jpeg'
import img3 from '../../assets/img/place3.avif'

const OurServicies = () => {
    return (
        <section className='our-servicies'>
            {/* <h2 className='servicies-title'>Nuestros <strong className='contrast'>Servicios</strong></h2>

            <div className="all-servicies">
                <div className="background-color">
                    <svg className='servicies-icon' xmlns="http://www.w3.org/2000/svg" fill='#ff0000' color='#ff0000' height="33" width="28" viewBox="0 -960 960 960" width="24"><path d="M200-80v-800h80v80h560l-80 200 80 200H280v320h-80Zm80-640v240-240Zm220 200q33 0 56.5-23.5T580-600q0-33-23.5-56.5T500-680q-33 0-56.5 23.5T420-600q0 33 23.5 56.5T500-520Zm-220 40h442l-48-120 48-120H280v240Z"/></svg>
                    <span className='servicie-text'>Visitas tradicionales</span>
                </div>
            </div> */}

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

            </Swiper>
            {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                    {/* <!-- Slides --> */}
                    <div className="swiper-slide"><img src={img1} alt="" /></div>
                    <div className="swiper-slide"><img src={img2} alt="" /></div>
                    <div className="swiper-slide"><img src={img3} alt="" /></div>
                    ...
                </div>
                {/* <!-- If we need pagination --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- If we need navigation buttons --> */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                {/* <!-- If we need scrollbar --> */}
                <div className="swiper-scrollbar"></div>
            </div>
        </section>
    )
}

export default OurServicies