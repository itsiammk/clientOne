import Image from "next/image";
import React from "react";
import style from "./card.module.scss";
import InteractiveCard from "../InteractiveCard";
import NumberCard from "../NumberCard";

const About1 = () => {
  const companies = [
    {name: "AFCONS INFRASTRUCTURE LIMITED", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmp4bDNpvQbBJvotdomsJQQaW3WyMz6v6VBNNWVHPxA&s'},
    {name: "DILIP BUILDCON LIMITED", image: 'https://trendlyne-media-mumbai-new.s3.amazonaws.com/profilepicture/4652_profilepicture.jpg'},
    {name: "METALFAB HIGHTECH PVT. LTD.", image: 'https://media.licdn.com/dms/image/C4E0BAQGWGvwlDaiz1Q/company-logo_200_200/0/1630611586705?e=2147483647&v=beta&t=szEtgXza6tIvSHK5PzHLgJ9aeLIl82VPmK6uREeJYGw'},
    {name: "RENUKA EQUIPMENTS PVT. LTD.", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEmjn1TLjt5geAyRsCIa5GrYAoPUCB-p_384pUlo6Vw&s'}
  ];  
  const dashboard = [
    { heading: 'ESTABLISHED in', number: 1987, plus: false },
    { heading: 'PROJECTS COMPLETED', number: 100, plus: true },
    { heading: 'WORK EMPLOYED', number: 26000, plus: true },
    { heading: 'ACTIVE PROJECTS', number: 50, plus: true },
    { heading: 'CLIENTS & PARTNERS', number: 70, plus: true },
    { heading: 'YEARS EXPERIENCE', number: 35, plus: true },
  ];
  return (
    <div className={style.mainAbout}>
      <div className={style.aboutUs}>
        <div className={style.leftAbout}>
          <h1>About Us</h1>
        </div>
      </div>
      <section className={`overflow-hidden pt-20 pb-12 px-20 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark ${style.section}`}>
        <div className="containerm mx-auto">
          <div className={style.aboutUsText}>
            <p>
            Welcome to <span className={style.swatiText}>Swati Enterprises</span>, world of metal magic, where we've honed our skills
            for over 12 years. We're not your ordinary metal treatment company;
            we're small but mighty, specializing in erecting sturdy steel
            structures, crafting all sorts of steel wonders, and creating
            advanced Pre-Engineered Buildings (PEB). But that's not all! We're
            also your go-to experts for engineering advice, detailed shop
            drawings, and providing skilled workers for various construction
            tasks. Oh, and we even help with logistics and export packing – talk
            about versatile! <br /> But what truly sets us apart is our expertise in
            BRIDGES and FOB. We are the architects of connections that transcend
            time, where each bridge is not just a physical structure but a
            testament to our engineering prowess. Our secret ingredients? A
            highly skilled team, state-of-the-art facilities, and an unwavering
            commitment to making your metal dreams come true. So, whether you're
            building dreams or bridges, we're here to turn your vision into
            reality.
          </p>
          </div>
        <div className={style.dashboard}>
        {dashboard.map((item)=> {
          return <NumberCard heading={item.heading} number={item.number} plus={item.plus} />
        })}
      </div>
        <div className={`flex flex-wrap items-center justify-between -mx-4 ${style.clients}`}>
            <div className="w-full px-4">
              <div className="mt-0 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                  Clients
                </h2>
                <p className={`mb-5 text-base text-body-color ${style.aboutOne}`}>
                Swati Enterprises boasts a technically-proficient team supported by a highly-motivated and skilled workforce. With over 12 years of experience in erection, fabrication, and related fields, we are well-equipped to handle projects of any scale. Our list of esteemed clients includes:
                </p>
              </div>
              <div className={style.companiesList}>
                {
                  companies.map((item)=> {
                    return <InteractiveCard heading={item.name} image={item.image} />
                  })
                }
              </div>
            </div>
          </div>
          <div className={`flex flex-wrap items-center justify-between -mx-4 ${style.capabilities}`}>
            <div className="w-full px-4">
              <div className="mt-2 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                Our Capabilities
                </h2>
                <p className={`mb-5 text-base text-body-color ${style.aboutTwo}`}>
                Our capabilities include a wide range of fabrication and erection work, supported by advanced tools, machinery, and skilled manpower. With a focus on safety and quality, Swati Enterprises is your trusted partner for engineering solutions.                </p>
              </div>
            </div>
          </div>
          <div className={`flex flex-wrap items-center justify-between -mx-4 ${style.commitment}`}>
            <div className="w-full px-4">
              <div className="mt-2 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                Commitment
                </h2>
                <p className={`mb-5 text-base text-body-color ${style.aboutTwo}`}>
                Our capabilities include a wide range of fabrication and erection work, supported by advanced tools, machinery, and skilled manpower. With a focus on safety and quality, Swati Enterprises is your trusted partner for engineering solutions.                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About1;
