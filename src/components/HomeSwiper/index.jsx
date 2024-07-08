import React from "react";
import style from "./style.module.scss";

const HomeSwiper = () => {
  const images = [
    "https://res.cloudinary.com/dieumlbdc/image/upload/v1720371889/swati/HomeTop_cd14ye.jpg",
  ];
  return (
    <div className={style.mainBox}>
      <img className={style.images} src={images[0]} />
    </div>
  );
};

export default HomeSwiper;
