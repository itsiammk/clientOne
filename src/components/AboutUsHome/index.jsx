import React from "react";

const AboutUsHome = () => {
  return (
    <div>
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Swati Enterprises
            </h1>
            <p class="mb-8 leading-relaxed">
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
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://source.unsplash.com/random/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHome;
