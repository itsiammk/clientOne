import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import style from './style.module.scss'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import serviceapi from "@/api/servicesApi";

import Cards from "../Common/Card";
import { useMediaQuery } from 'react-responsive';

const ServicesSwiper = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className={`pl-2 pr-2 pb-20 pt-5 shadow-md`}>
      <h1 className="pl-5 pt-10 pb-5 mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-4xl lg:text-5xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">
          SERVICES
        </span> we provide
      </h1>
      <Swiper
        slidesPerView={isMobile ? 1 : 4}
        spaceBetween={20}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation={true}
        loop={true}
        autoplay={false}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {serviceapi?.map((item, index) => (
          <SwiperSlide>
            <Cards title={item.title} info={item.info} imageSrc={item.logo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ServicesSwiper;
