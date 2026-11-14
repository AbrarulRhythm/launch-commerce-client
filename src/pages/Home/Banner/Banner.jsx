import { Swiper, SwiperSlide } from 'swiper/react';
import banner01 from '../../../assets/banner/banner-01.png';
import banner02 from '../../../assets/banner/banner-02.png';
import banner03 from '../../../assets/banner/banner-03.png';
import banner01Sm from '../../../assets/banner/banner-01-sm.png';
import banner02Sm from '../../../assets/banner/banner-02-sm.png';
import banner03Sm from '../../../assets/banner/banner-03-sm.png';
import { Link } from 'react-router';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Scrollbar, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="hero-banner">
            <Swiper
                loop={true}
                speed={2000}
                scrollbar={{
                    hide: true,
                }}
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to="/" aria-label="View Banner 01 details">
                        <img src={banner01} className="w-full hidden md:block" alt="" />
                        <img src={banner01Sm} className="w-full block md:hidden" alt="" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/" aria-label="View Banner 02 details">
                        <img src={banner02} className="w-full hidden md:block" alt="" />
                        <img src={banner02Sm} className="w-full block md:hidden" alt="" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/" aria-label="View Banner 03 details">
                        <img src={banner03} className="w-full hidden md:block" alt="" />
                        <img src={banner03Sm} className="w-full block md:hidden" alt="" />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
