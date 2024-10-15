import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AboutUsHome = ({page}) => {
  const router = useRouter()
  const images = [
    "/img8.jpeg"
  ];

  return (
    <div className={`${style.mainBox} px-1 lg:px-10`}>
      <section className="text-gray-700 body-font shadow-bottom-md">
        <div className="container mx-auto flex px-5 py-8 lg:py-24 md:flex-row flex-col items-left">
          <div className={style.textBox}>
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">
              <span className={style.animationText}>SWATI ENTERPRISES</span>            </h1>
            <p className={`${style.para} mb-8 leading-relaxed font-light`}>
              Swati Enterprises, a thriving presence in the metal treatment
              industry, brings over 12 years of invaluable experience as a
              dedicated MSME entity.
            </p>
            {page !== 'main' && <div >
              <button onClick={()=> router.push('/about-us')} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View More
              </button>
            </div>}
          </div>
          {/* <img
            className={`${style.image} object-cover object-center rounded`}
            alt="hero"
            src={images[0]}
          /> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUsHome;
