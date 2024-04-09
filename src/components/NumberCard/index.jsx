import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import style from './style.module.scss';

const NumberCard = ({ heading, number, plus }) => {
  const countUpRef = useRef(null);

  useEffect(() => {
    if (countUpRef.current) {
      countUpRef.current.start();
    }
  }, []);

  return (
    <div className={style.mainCard}>
      <h1>{heading}</h1>
      <h2>
        <CountUp
          ref={countUpRef}
          start={0}
          end={number}
          duration={1.2}
          separator=","
        />
        {plus && '+'}
      </h2>
    </div>
  );
};

export default NumberCard;