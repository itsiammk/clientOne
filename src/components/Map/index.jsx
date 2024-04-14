import React from 'react';
import styles from './style.module.scss';

const Map = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapSection}>
        <div className={styles.map}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Swati%20Enterprises+(Swati%20Enterprises)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;