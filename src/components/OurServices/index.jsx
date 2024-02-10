import React, { useState } from "react";
import serviceapi from '@/api/servicesApi';
import Card from "../Common/Card";
import style from './style.module.scss'

const OurServices = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
	const cardData = serviceData.map((item) => <Card title={item.title} info={item.info} imageSrc={item.logo} />)
	console.log(cardData)
  return (
    <>
      <section className={style.mainContainer}>
				{cardData}
      </section>
    </>
  );
};

export default OurServices;