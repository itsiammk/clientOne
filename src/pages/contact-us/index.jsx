import React from 'react'
import style from './style.module.scss'

const ContactUs = () => {
    const emailAddress = 'piyush19cs39@gmail.com';
    const mailtoUrl = `mailto:${emailAddress}`;
    const handleEmailClick = () => {
        window.location.href = mailtoUrl;
      };
  return (
    <div className={style.containerButton}>
      <a href={mailtoUrl} className={style.button}>Email</a>
      <button className={style.button}>WhatsApp</button>
      <button className={style.button}>Phone No</button>
    </div>
  )
}

export default ContactUs
