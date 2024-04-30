import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CallIcon from "@mui/icons-material/Call";
import style from "./style.module.scss";

export default function FloatingActionButtons() {
  const [scollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollPosition(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    console.log('first')
      window.scrollTo({
          top: 5000,
          behavior: "smooth",
        });
    };
  return (
    <div className={style.main} onClick={()=> scrollToTop()}>
      {scollPosition < 1300 && <Box>
        <Fab color="primary" aria-label="add">
          <CallIcon />
        </Fab>
      </Box>}
    </div>
  );
}
