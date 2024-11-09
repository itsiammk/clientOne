import { useEffect, useState } from "react";
import { isMobileOnly } from "react-device-detect";
import NumberCard from "../NumberCard";
import style from "./card.module.scss";
import WaveCommon from "./Wave";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BioCard from "../BioCard";
import CompanyAboutSection from "./CompanyAboutSection";

const About1 = () => {
  const companies = [
    { name: "AFCONS INFRASTRUCTURE LIMITED", image: "/afcons.png" },
    { name: "DILIP BUILDCON LIMITED", image: "/dilip.jpg" },
    { name: "METALFAB HIGHTECH PVT. LTD.", image: "/metafab.jpeg" },
    { name: "RENUKA EQUIPMENTS PVT. LTD.", image: "/renuka.jpeg" },
    { name: "NIKHIL CONSTRUCTIONS GROUP PVT. LTD.", image: "/nikhil.jfif" },
  ];
  const dashboard = [
    { heading: "ESTABLISHED in", number: 2022, plus: false },
    { heading: "PROJECTS COMPLETED", number: 10, plus: true },
    { heading: "WORK EMPLOYED", number: 150, plus: true },
    { heading: "ACTIVE PROJECTS", number: 5, plus: true },
    { heading: "CLIENTS & PARTNERS", number: 10, plus: true },
    { heading: "YEARS EXPERIENCE", number: 10, plus: true },
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
          <div className={`${style.aboutUsText}`}>
            <p className="my-auto">
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
              Hightech, and REPL A/C Maharashtra Metro Rail Corporation Ltd. With our expertise
              and commitment to quality, we strive to build better
              infrastructure solutions.
            </p>
            <BioCard />
          </div>
          <div className={style.dashboard}>
            {dashboard.map((item, index) => {
              return (
                <NumberCard
                  heading={item.heading}
                  number={item.number}
                  plus={item.plus}
                  key={index}
                />
              );
            })}
          </div>
            <CompanyAboutSection />
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
