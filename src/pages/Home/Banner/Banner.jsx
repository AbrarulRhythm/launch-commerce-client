import { Swiper, SwiperSlide } from 'swiper/react';
import banner01 from '../../../assets/banner/banner-01.png';
import banner02 from '../../../assets/banner/banner-02.png';
import banner03 from '../../../assets/banner/banner-03.png';
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
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to="/">
                        <img src={banner01} className="w-full" alt="" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <img src={banner02} className="w-full" alt="" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/">
                        <img src={banner03} className="w-full" alt="" />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
