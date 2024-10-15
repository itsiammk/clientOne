import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import serviceapi from "@/apis/servicesApi";

import Cards from "../Common/Card";
import { useMediaQuery } from "react-responsive";
import Button from "@mui/joy/Button";
import { useRouter } from "next/router";

const ServicesSwiper = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className={`${style.main} pl-2 pr-2 pb-20 pt-5 shadow-md body-font`}>
      <h1 className={style.serviceText}>
        <span>SERVICES</span>
        <button
          onClick={() => router.push("/services")}
          className={style.button}
        >
          View All
        </button>
      </h1>
      <div className={style.cards}>
        {serviceapi?.map((item) => (
          <div onClick={() => router.push("/services")}>
            <Cards
              key={item.id}
              title={item.title}
              info={item.info}
              imageSrc={item.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServicesSwiper;
