import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import serviceapi from "@/api/servicesApi";
import Image from "next/image";

const HomeSwiper = () => {
  const images = [
    "/img1.jfif",
    "/img2.jfif",
    "/img3.jfif",
    "/img4.jfif",
    "/img5.jfif",
  ];
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation={true}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((item)=>{
        return <SwiperSlide>
            <img className={style.images} src={item} />
        </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
