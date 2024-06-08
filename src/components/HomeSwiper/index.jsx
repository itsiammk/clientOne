import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import serviceapi from "@/apis/servicesApi";
import Image from "next/image";

const HomeSwiper = () => {
  const images = [
    "HomeTop.jpg",
  ];
  return (
    <div className={style.mainBox}>
      <img className={style.images} src={images[0]} />
    </div>
  );
};

export default HomeSwiper;
