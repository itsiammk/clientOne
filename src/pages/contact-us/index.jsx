import React from 'react'
import style from './style.module.scss'
import WaveCommon from '@/components/Common/Wave';

const ContactUs = () => {
    const emailAddress = 'piyush19cs39@gmail.com';
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent('subject')}&body=${encodeURIComponent('body')}`;
    const handleEmailClick = () => {
        window.location.href = mailtoUrl;
      };
  return (
    <div className={style.containerButton}>
      <WaveCommon text={'Contact Us'} />
      <a href={mailtoUrl} className={style.button}>Email</a>
      <button className={style.button}>WhatsApp</button>
      <button className={style.button}>Phone No</button>
    </div>
  )
}

export default ContactUs
