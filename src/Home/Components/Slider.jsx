import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "../assets/css/slider.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'


const Slider = ({ image }) => {
    return (
        <>

            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "35px",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-pagination-bullet-inactive-color": "#fff",
                    "--swiper-pagination-bullet-inactive-opacity": "0.4",
                }}
                slidesPerView={2}
                spaceBetween={20}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 150,

                    },
                    640: {
                        slidesPerView: 1,

                    },

                    768: {
                        slidesPerView: 1,

                    },
                    1025: {
                        slidesPerView: 2,
                        spaceBetween: 50
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {image.map(slide => (

                    <SwiperSlide key={slide.id}>

                        <div className="imgDiv" id={slide.id}>
                            <img src={slide.src} alt="" />
                            <h4>{slide.title}</h4>
                            <p>${slide.price}.00</p>
                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </>
    )
}

export default Slider
