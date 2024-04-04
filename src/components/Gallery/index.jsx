import React, { useState } from "react";
import { data } from "@/apis/galleryData";

const Gallery = () => {
  const [currentTag, setCurrentTag] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const filteredData = currentTag
    ? data.filter((item) => item.tag === currentTag)
    : data;

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => setCurrentTag(null)}
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          All categories
        </button>
        <button
          type="button"
          onClick={() => setCurrentTag("one")}
          className="text-gray-900 border border-white hover:border-gray-200 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          One
        </button>
        <button
          type="button"
          onClick={() => setCurrentTag("two")}
          className="text-gray-900 border border-white hover:border-gray-200 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Two
        </button>
        <button
          type="button"
          onClick={() => setCurrentTag("three")}
          className="text-gray-900 border border-white hover:border-gray-200 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
        >
          Three
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
        {filteredData?.map((item, index) => {
          return (
            <div className="cursor-pointer" key={index}>
              {item.type === "image" && (
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={item.content}
                  alt=""
                  onClick={() => openModal(item.content)}
                />
              )}
              {item.type === "video" && (
                <video
                  className="h-auto max-w-full rounded-lg"
                  controls
                  onClick={() => openModal(item.content)}
                >
                  <source src={item.content} type="video/mp4" />
                </video>
              )}
            </div>
          );
        })}
      </div>
      {modalContent && (
        <div className="fixed z-50 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
          <div className="max-w-4xl relative" style={{ top: "40px" }}>
            {modalContent.includes(".mp4") ? (
              <video className="max-w-full max-h-full" controls>
                <source src={modalContent} type="video/mp4" />
              </video>
            ) : (
              <img src={modalContent} alt="Modal" className="max-w-full max-h-full" />
            )}
            <button
              className="absolute top-0 right-0 m-3 text-black text-2xl bg-transparent hover:bg-white rounded-md p-0 w-8 h-8 transition duration-200"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
