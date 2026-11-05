import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AppImage from '../../../components/AppImage/AppImage';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';

const TopCategories = () => {
    return (
        <div className="container">
            <SectionTitle title="Top Categories"></SectionTitle>

            <Swiper
                slidesPerView={7}
                spaceBetween={24}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    // * When window width is >= 320px (Mobile)
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    // * When window width is >= 768px (Tablet)
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                    // * When window width is >= 1024px (Desktop)
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 24,
                    },
                }}
            >
                <SwiperSlide>
                    <Link to="/" className="block border border-dark-03 bg-white rounded-xl px-4 py-5 text-center group">
                        <AppImage className="w-22.5 h-22.5 mx-auto border border-dark-03 rounded-full mb-2 group-hover:scale-105 duration-300"></AppImage>
                        <h3 className="text-dark-08 group-hover:text-theme-primary duration-300">New Arrival</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/" className="block border border-dark-03 bg-white rounded-xl px-4 py-5 text-center group">
                        <AppImage className="w-22.5 h-22.5 mx-auto border border-dark-03 rounded-full mb-2 group-hover:scale-105 duration-300"></AppImage>
                        <h3 className="text-dark-08 group-hover:text-theme-primary duration-300">Lamp</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/" className="block border border-dark-03 bg-white rounded-xl px-4 py-5 text-center group">
                        <AppImage className="w-22.5 h-22.5 mx-auto border border-dark-03 rounded-full mb-2 group-hover:scale-105 duration-300"></AppImage>
                        <h3 className="text-dark-08 group-hover:text-theme-primary duration-300">Clock</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/" className="block border border-dark-03 bg-white rounded-xl px-4 py-5 text-center group">
                        <AppImage className="w-22.5 h-22.5 mx-auto border border-dark-03 rounded-full mb-2 group-hover:scale-105 duration-300"></AppImage>
                        <h3 className="text-dark-08 group-hover:text-theme-primary duration-300">Hot Packs</h3>
                    </Link>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <Link to="/" className="block border border-dark-03 bg-white rounded-xl px-4 py-5 text-center group">
                        <AppImage className="w-22.5 h-22.5 mx-auto border border-dark-03 rounded-full mb-2 group-hover:scale-105 duration-300"></AppImage>
                        <h3 className="text-dark-08 group-hover:text-theme-primary duration-300">Mouse</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/" className="block border border-dark-03 bg-white rounded-xl px-4 py-5 text-center group">
                        <AppImage className="w-22.5 h-22.5 mx-auto border border-dark-03 rounded-full mb-2 group-hover:scale-105 duration-300"></AppImage>
                        <h3 className="text-dark-08 group-hover:text-theme-primary duration-300">Tripod</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/" className="block border border-dark-03 bg-white rounded-xl px-4 py-5 text-center group">
                        <AppImage className="w-22.5 h-22.5 mx-auto border border-dark-03 rounded-full mb-2 group-hover:scale-105 duration-300"></AppImage>
                        <h3 className="text-dark-08 group-hover:text-theme-primary duration-300">Combo Offer</h3>
                    </Link>
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default TopCategories;
