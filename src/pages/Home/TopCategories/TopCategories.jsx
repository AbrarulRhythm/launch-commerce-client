import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import AppImage from '../../../components/AppImage/AppImage';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const TopCategories = () => {
    return (
        <div className="container">
            <SectionTitle title="Top Categories"></SectionTitle>

            <div className="relative">
                <Swiper
                    slidesPerView={7}
                    spaceBetween={20}
                    navigation={{
                        prevEl: '.top-categories-custom-prev',
                        nextEl: '.top-categories-custom-next',
                    }}
                    speed={1000}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation, Autoplay]}
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
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        // * When window width is >= 1280px (Desktop)
                        1440: {
                            slidesPerView: 7,
                            spaceBetween: 20,
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
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/" className="block border border-dark-03 bg-white rounded-xl px-4 py-5 text-center group">
                            <AppImage className="w-22.5 h-22.5 mx-auto border border-dark-03 rounded-full mb-2 group-hover:scale-105 duration-300"></AppImage>
                            <h3 className="text-dark-08 group-hover:text-theme-primary duration-300">Combo Offer</h3>
                        </Link>
                    </SwiperSlide>
                </Swiper>

                {/* Custom Navigation Button */}
                <div className="flex justify-end items-center gap-2.5 mt-4">
                    <button className="top-categories-custom-prev navigation-button" aria-label="Previous category">
                        <GoChevronLeft className="text-lg" />
                    </button>
                    <button className="top-categories-custom-next navigation-button" aria-label="Next category">
                        <GoChevronRight className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;
