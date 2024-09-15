import React from "react";
import style from "./style.module.scss";

const HomeSwiper = () => {
  const images = [
    "https://res.cloudinary.com/dieumlbdc/image/upload/v1726390452/swati/HomeTop_cd14ye_epgyxi.webp",   
  ];
  return (
    <div className={style.mainBox}>
      <img className={style.images} src={images[0]} />
    </div>
  );
};

export default HomeSwiper;
