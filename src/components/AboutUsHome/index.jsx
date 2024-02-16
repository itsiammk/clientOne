import { useRouter } from "next/router";
import React from "react";
import { useMediaQuery } from 'react-responsive';

const AboutUsHome = ({page}) => {
  const router = useRouter()
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="px-1 lg:px-10">
      <section className="text-gray-700 body-font shadow-bottom-md">
        <div className="container mx-auto flex px-5 py-8 lg:py-24 md:flex-row flex-col items-left">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Swati Enterprises
            </h1>
            <p className="mb-8 leading-relaxed">
              Swati Enterprises, a thriving presence in the metal treatment
              industry, brings over 12 years of invaluable experience as a
              dedicated MSME entity. Our journey from a modest beginning to a
              prominent position has been marked by unwavering commitment and
              expertise. We specialize in a diverse spectrum of services,
              encompassing steel structure erection, fabrication, Pre-Engineered
              Buildings (PEBs), engineering consultancy, detailing, and labor
              supply for construction. Our success is anchored in a highly
              skilled workforce, technical proficiency, and a client roster that
              includes industry giants like AFCONS INFRASTRUCTURE LIMITED, DILIP
              BUILDCON LIMITED, and more. At Swati Enterprises, our pledge to
              unwavering quality and excellence remains the driving force behind
              every project we undertake.
            </p>
            {page !== 'main' && <div className="flex justify-center">
              <button onClick={()=> router.push('/about-us')} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View More
              </button>
            </div>}
          </div>
          {!isMobile && <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="aboutus.png"
            />
          </div>}
        </div>
      </section>
    </div>
  );
};

export default AboutUsHome;
