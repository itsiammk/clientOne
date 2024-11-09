import { isMobileOnly } from "react-device-detect";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import style from "./card.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import InteractiveCard from "../InteractiveCard";

import { useEffect, useState } from "react";

const CompaniesCardSwiper = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileOnly);
  }, [isMobileOnly]);
  const companies = [
    { name: "AFCONS INFRASTRUCTURE LIMITED", image: "/afcons.png" },
    { name: "DILIP BUILDCON LIMITED", image: "/dilip.jpg" },
    { name: "METALFAB HIGHTECH PVT. LTD.", image: "/metafab.jpeg" },
    { name: "RENUKA EQUIPMENTS PVT. LTD.", image: "/renuka.jpeg" },
    { name: "NIKHIL CONSTRUCTIONS GROUP PVT. LTD.", image: "/nikhil.jfif" },
  ];
  return (
    <div
      className={`flex flex-wrap items-center justify-between mx-4 my-8 ${style.clients}`}
    >
      <div className="w-full px-4">
        <div className="mt-0 lg:mt-0">
          <h2 className="mb-5 text-3xl font-medium sm:text-[40px]/[48px]">
            Our Clients
          </h2>
          <p className={`mb-5 text-base text-body-color ${style.aboutOne}`}>
            Swati Enterprises boasts a technically-proficient team supported by
            a highly-motivated and skilled workforce. With over 12 years of
            experience in erection, fabrication, and related fields, we are
            well-equipped to handle projects of any scale. Our list of esteemed
            clients includes:
          </p>
        </div>
        <div className={style.companiesList}>
          <Swiper
            modules={[Pagination, Autoplay, A11y]}
            loop={true}
            autoplay={{ delay: 400000 }}
            pagination={{ clickable: true }}
            className="mySwiper"
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={isMobile ? 0 : 80}
          >
            {companies.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <InteractiveCard
                    heading={item.name}
                    image={item.image}
                    isMobile={isMobile}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* {
          companies.map((item)=> {
            return <InteractiveCard heading={item.name} image={item.image} />
          })
        } */}
        </div>
      </div>
    </div>
  );
};

export default CompaniesCardSwiper;
