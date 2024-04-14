import React from 'react';
import { Typography } from '@mui/joy';
import style from './style.module.scss'

const AddressMap = () => {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.9560705981407!2d72.89294723462338!3d19.111509900000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80b469848ad%3A0xf4f8533b14362299!2s12-2%2C%20Yadav%20Nagar%2C%20Chandivali%2C%20Powai%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1713087124036!5m2!1sen!2sin';

  return (
    <div className="flex flex-col md:flex-row p-5 bg-gray-100">
      <div className={`md:w-1/2 lg:p-8 md:pr-0 lg:pr-72 flex flex-col justify-center ${style.leftContainer}`}>
        <Typography level="h4" className="mb-4">
          Our Presence
        </Typography>
        <Typography level="h5" className="mb-2 font-bold">
          Corporate Office
        </Typography>
        <Typography className="mb-6">
          Plot No. 5, Sector 4, Swati HeadQuarter Mumbai, MH, INDIA - 400000
        </Typography>
        <a
          href="#"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-40 rounded transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
      <div className={`md:w-1/2 relative lg:p-8 md:p-1 md:pt-1`}>
        <iframe
          src={mapSrc}
          width="100%"
          frameBorder="0"
          title="Map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={style.rightMap}
        ></iframe>
      </div>
    </div>
  );
};

export default AddressMap;