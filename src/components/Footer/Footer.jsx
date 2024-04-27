import React from "react";
import ItemsContainer from "./ItemContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { Typography } from "@mui/joy";
import style from "./style.module.scss";

const Footer = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+919373773838";
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello I am coming from website, please reply");
    const whatsappUrl = `https://wa.me/917376295773?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    const mailtoUrl = `mailto:info.senterprises1122@gmail.com`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white pt-4">
      <div
        className={`md:flex md:justify-between md:items-center sm:mx-12 lg:mx-80 lg:px-16 md:px-6 rounded-xl bg-[#ffffff19] py-4 ${style.wholeContactBox}`}
      >
        <div className={`text-center ${style.contactButton}`}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-full flex items-center"
            onClick={handleCallClick}
          >
            <CallIcon className="mr-2" />
            Call
          </button>
          <div>
            <Typography level="body-xs" sx={{ color: "white", marginTop: "3px" }}>
              +91 9373773838
            </Typography>
          </div>
        </div>

        {/* WhatsApp Chat Button */}
        <div className={`text-center ${style.contactButton}`}>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-16 rounded-full flex items-center"
            onClick={handleWhatsAppClick}
          >
            <WhatsAppIcon className="mr-2" />
            Whatsapp
          </button>
          <div>
            <Typography level="body-xs" sx={{ color: "white", marginTop: "3px" }}>
              +91 9373773838
            </Typography>
          </div>
        </div>

        {/* Email Contact Button */}
        <div className={`text-center ${style.contactButton}`}>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-16 rounded-full flex items-center"
            onClick={handleEmailClick}
          >
            <EmailIcon className="mr-2" />
            Mail
          </button>
          <div>
            <Typography level="body-xs" sx={{ color: "white", marginTop: "3px" }}>
              contact@swatienterprises.com
            </Typography>
          </div>
        </div>
      </div>

      <ItemsContainer />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>Copyright © 2024 Swati Enterprises. All rights reserved.</span>
        <span>SWATI ENTERPRISES</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;