import Image from "next/image";
import React, { useEffect, useState } from "react";
import style from "./card.module.scss";
import NumberCard from "../NumberCard";
import WaveCommon from "./Wave";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { isMobileOnly } from "react-device-detect";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import InteractiveCard from "../InteractiveCard";
import BioCard from "../BioCard";

const About1 = () => {
  const companies = [
    { name: "AFCONS INFRASTRUCTURE LIMITED", image: "/afcons.png" },
    { name: "DILIP BUILDCON LIMITED", image: "/dilip.jpg" },
    { name: "METALFAB HIGHTECH PVT. LTD.", image: "/metafab.jpeg" },
    { name: "RENUKA EQUIPMENTS PVT. LTD.", image: "/renuka.jpeg" },
  ];
  const dashboard = [
    { heading: "ESTABLISHED in", number: 1987, plus: false },
    { heading: "PROJECTS COMPLETED", number: 100, plus: true },
    { heading: "WORK EMPLOYED", number: 26000, plus: true },
    { heading: "ACTIVE PROJECTS", number: 50, plus: true },
    { heading: "CLIENTS & PARTNERS", number: 70, plus: true },
    { heading: "YEARS EXPERIENCE", number: 35, plus: true },
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileOnly);
  }, [isMobileOnly]);

  return (
    <div className={style.mainAbout}>
      <WaveCommon text={"About Us"} />
      <section
        className={`overflow-hidden pt-20 pb-12 px-20 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark ${style.section}`}
      >
        <div className="containerm mx-auto">
          <div className={style.aboutUsText}>
            <p>
              <span className={style.swatiText}>Swati Enterprises</span> is a
              growing company in the metal treatment industry operating as a
              small entrepreneur under MSME. With over 12 years of experience,
              we specialize in the erection of steel structures and bridges,
              fabrication of all types of steel structures, pre-engineered
              buildings, engineering consultancy, detailing (shop drawings),
              labor supply for construction work, and logistics and export
              packing consultancy services. <br /> Our key strengths include a
              technically proficient team backed by a highly motivated and
              skilled workforce, well-equipped facilities for erection and
              fabrication, and skilled manpower for any type of erection and
              fabrication job. We have successfully completed several major
              projects for clients like AFCONS, Dilip Buildcon, Metalfab
              Hightech, and Maharashtra Metro Rail Corp. Ltd. With our expertise
              and commitment to quality, we strive to build better
              infrastructure solutions.
            </p>
            <BioCard />
          </div>
          <div className={style.dashboard}>
            {dashboard.map((item) => {
              return (
                <NumberCard
                  heading={item.heading}
                  number={item.number}
                  plus={item.plus}
                />
              );
            })}
          </div>
          <div
            className={`flex flex-wrap items-center justify-between -mx-4 ${style.clients}`}
          >
            <div className="w-full px-4">
              <div className="mt-0 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                  Clients
                </h2>
                <p
                  className={`mb-5 text-base text-body-color ${style.aboutOne}`}
                >
                  Swati Enterprises boasts a technically-proficient team
                  supported by a highly-motivated and skilled workforce. With
                  over 12 years of experience in erection, fabrication, and
                  related fields, we are well-equipped to handle projects of any
                  scale. Our list of esteemed clients includes:
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
                  {companies.map((item) => {
                    return (
                      <SwiperSlide>
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
          <div
            className={`flex flex-wrap items-center justify-between -mx-4 ${style.capabilities}`}
          >
            <div className="w-full px-4">
              <div className="mt-2 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                  Our Capabilities
                </h2>
                <p
                  className={`mb-5 text-base text-body-color ${style.aboutTwo}`}
                >
                  Swati Enterprises boasts a wide range of capabilities in steel
                  construction. We specialize in fabricating various steel
                  structures, including girders, columns, trusses, and
                  pre-engineered buildings. Our skilled workforce has expertise
                  in erecting steel bridges, industrial structures, and
                  infrastructure projects of all scales. With state-of-the-art
                  equipment and facilities, we can handle complex jobs
                  efficiently while maintaining stringent quality standards.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-wrap items-center justify-between -mx-4 ${style.commitment}`}
          >
            <div className="w-full px-4">
              <div className="mt-2 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                  Commitment
                </h2>
                <p
                  className={`mb-5 text-base text-body-color ${style.aboutTwo}`}
                >
                  At Swati Enterprises, our commitment is to deliver
                  high-quality work that meets or exceeds our clients'
                  expectations. We take pride in our workmanship and dedicate
                  ourselves to completing projects safely, on time, and within
                  budget. Our team upholds strong ethical values, and we are
                  committed to building long-lasting relationships with our
                  clients based on trust and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About1;
