import { BsArrowRightShort } from 'react-icons/bs';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard01 from '../../Shared/ProductCard/ProductCard01';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const ProductSlider = ({ title, navigationEl, autoplayDelay }) => {
    return (
        <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                {/* Title */}
                <div>
                    <h3 className="text-xl font-medium text-dark-08 border-b-2 border-theme-primary pb-2">{title}</h3>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between space-x-6 mt-4 md:mt-0 w-full md:w-fit">
                    <Link
                        to="/"
                        className="flex items-center text-dark-08 space-x-2 border-b border-dark-08 pb-1.5 hover:text-theme-primary duration-200 hover:border-theme-primary"
                    >
                        <span>View All Items</span> <BsArrowRightShort className="text-2xl" />
                    </Link>

                    {/* Custom Navigation Button */}
                    <div className="flex items-center space-x-2.5">
                        <button className={`${navigationEl}-custom-prev navigation-button`}>
                            <GoChevronLeft className="text-lg" />
                        </button>
                        <button className={`${navigationEl}-custom-next navigation-button`}>
                            <GoChevronRight className="text-lg" />
                        </button>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={7}
                spaceBetween={20}
                navigation={{
                    prevEl: `.${navigationEl}-custom-prev`,
                    nextEl: `.${navigationEl}-custom-next`,
                }}
                speed={1000}
                autoplay={{ delay: autoplayDelay }}
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
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    // * When window width is >= 1024px (Desktop)
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <ProductCard01></ProductCard01>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard01></ProductCard01>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard01></ProductCard01>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard01></ProductCard01>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard01></ProductCard01>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard01></ProductCard01>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ProductSlider;
