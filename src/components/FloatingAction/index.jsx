import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CallIcon from "@mui/icons-material/Call";
import style from "./style.module.scss";

export default function FloatingActionButtons() {
  const handleCallClick = () => {
    window.location.href = "tel:+919971185889";
  };

  return (
    <div className={style.main}>
      <Box>
        <Fab onClick={handleCallClick} color="primary" aria-label="add">
          <CallIcon />
        </Fab>
      </Box>
    </div>
  );
}
