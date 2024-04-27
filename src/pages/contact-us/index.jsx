// components/ContactForm.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./style.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7r0c2g4",
        "template_htnt7bt",
        e.target,
        "EVNRdSpv2Cd9Yomem"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          toast.success('Email sent successfully!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: 'green', color: 'white' },
            theme: 'colored',
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("An error occurred:", error.text);
          toast.error('An error occurred while sending the email.', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: 'red', color: 'white' },
            theme: 'colored',
          });
        }
      );
  };

  return (
    <>
      <div className={styles.container}>
        <span className={styles.bigCircle}></span>
        <img src="/shape.png" className={styles.square} alt="" />
        <div className={styles.form}>
          <div className={styles.contactInfo}>
            <h3 className={styles.title}>Let's get in touch</h3>
            <p className={styles.text}>
              It's time to talk. Tell us about your construction needs. Our
              friendly team listens carefully. We find smart ways to work
              together. Our skills solve your problems. E-mail us right away.
              Let's get started!
            </p>
            <div className={styles.info}>
              <div className={`${styles.information} font-bold text-base`}>
                <p>ADDRESS</p>
              </div>
              <div className={styles.information}>
                <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
                <p>Flat No 301, W-H, CL-1,</p>
              </div>
              <div className={styles.information}>
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;
                <p>Kanchanganga Apt., Hingna Nagpur,</p>
              </div>
              <div className={styles.information}>
                <i className="fas fa-phone"></i>&nbsp;&nbsp;
                <p>Maharashtra-441110</p>
              </div>
            </div>
            {/* <div className={styles.socialMedia}>
            <p>Connect with us :</p>
            <div className={styles.socialIcons}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div> */}
          </div>
          <div className={styles.contactForm}>
            <span className={`${styles.circle} ${styles.one}`}></span>
            <span className={`${styles.circle} ${styles.two}`}></span>
            <form
              className={styles.formClass}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <h3 className={styles.title}>Contact us</h3>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={"Name"}
                  required
                />
                <span>Username</span>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={"E-mail"}
                  required
                />
                <span>Email</span>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="tel"
                  name="phone"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={"Mobile Number"}
                  required
                />
                <span>Phone</span>
              </div>
              <div className={`${styles.inputContainer} ${styles.textarea}`}>
                <textarea
                  name="message"
                  className={styles.input}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={"Message"}
                  required
                ></textarea>
              </div>
              <input type="submit" value="Send" className={styles.btn} />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactForm
