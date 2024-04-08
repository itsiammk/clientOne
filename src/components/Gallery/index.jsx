import React, { useState } from "react";
import { data } from "@/apis/galleryData";
import Popup from 'reactjs-popup';
import style from './style.module.scss'

const Gallery = () => {
  const [currentTag, setCurrentTag] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const allData = [
    {
      type: 'button',
      onClick: () => setCurrentTag(null),
      class: `text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`,
      heading: 'All'
    },
    {
      type: 'button',
      onClick: () => setCurrentTag('one'),
      class: `text-gray-900 border border-white hover:border-gray-200 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`,
      heading: 'One'
    },
    {
      type: 'button',
      onClick: () => setCurrentTag('two'),
      class: `text-gray-900 border border-white hover:border-gray-200 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`,
      heading: 'Two'
    },
    {
      type: 'button',
      onClick: () => setCurrentTag('three'),
      class: `text-gray-900 border border-white hover:border-gray-200 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`,
      heading: 'Three'
    }
  ]

  const filteredData = currentTag
    ? data.filter((item) => item.tag === currentTag)
    : data;

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalOpen(false)
  };

  return (
    <div className={style.main}>
      <div
        className={`flex items-center justify-center py-4 md:py-8 flex-wrap ${style.allItem}`}
      >
        {allData?.map((item) => {
          return (
            <button
              type={item.type}
              onClick={item.onClick}
              className={`${item.class} ${style.buttons}`}
            >
              {item.heading}
            </button>
          );
        })}
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
                  onClick={() => {openModal(item.content); setModalOpen(true)}}
                />
              )}
              {item.type === "video" && (
                <video
                  className="h-auto max-w-full rounded-lg"
                  controls
                  onClick={() => {openModal(item.content); setModalOpen(true)}}
                >
                  <source src={item.content} type="video/mp4" />
                </video>
              )}
            </div>
          );
        })}
      </div>
      {console.log(modalContent,'mc')}
      <div className={style.mediaMain}>
      <Popup open={modalOpen} closeOnDocumentClick onClose={closeModal}>
        <div className={`modal`}>
          <a className="close" onClick={closeModal}>
            {" "}
            &times;{" "}
          </a>{" "}
          {modalContent?.includes(".mp4") ? (
              <video className={style.galleryOpen} controls>
                <source src={modalContent} type="video/mp4" />
              </video>
            ) : (
              <img
                src={modalContent}
                alt="Modal"
                className={style.galleryOpen}
              />
            )}
        </div>
      </Popup>
      </div>
    </div>
  );
};

export default Gallery;
