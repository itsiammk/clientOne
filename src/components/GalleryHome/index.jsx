import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./style.module.scss";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isMobileOnly,
} from "react-device-detect";

const GalleryHome = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileOnly);
  }, [isMobileOnly]);
  const dataGallery = [
    { content: "https://res.cloudinary.com/dieumlbdc/image/upload/v1720371911/swati/projectGallery2_dfa8dw.jpg", type: 'image' },
    { content: "https://res.cloudinary.com/dieumlbdc/image/upload/v1720371912/swati/projectGallery4_qomhin.jpg", type: 'image' },
    { content: "https://res.cloudinary.com/dieumlbdc/image/upload/v1720371912/swati/projectGallery3_fqu6yi.jpg", type: 'image' },
    { content: "https://res.cloudinary.com/dieumlbdc/video/upload/v1720371918/swati/projectGallery1_xodwxf.mp4", type: 'video' },
  ];
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  const homeData = dataGallery?.slice(0, isMobile ? 2 : 4);
  const router = useRouter();
  return (
    <div>
      <div>
        <section className="text-gray-700 body-font">
          <div
            className={`container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ${style.mediaHome}`}
          >
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">
                Gallery
              </h1>
              <p className="mb-8 leading-relaxed">
                The Gallery section showcases the expertise and craftsmanship of
                Swati Enterprises through visually stunning images capturing the
                various services provided. From the intricate detailing of steel
                structures to the efficient execution of construction projects,
                each image tells a story of dedication and excellence. Explore
                our gallery to witness the mastery behind every project.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => router.push("/gallery")}
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="w-full sm:w-3/6 lg:w-3/6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {homeData?.map((item, index) => {
                return (
                  <div
                    className="cursor-pointer"
                    key={index}
                    onClick={() => router.push("/gallery")}
                  >
                    {item.type === "image" && (
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={item.content}
                        alt=""
                      />
                    )}
                    {item.type === "video" && (
                      <video className="h-auto max-w-full rounded-lg" controls>
                        <source src={item.content} type="video/mp4" />
                      </video>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GalleryHome;
