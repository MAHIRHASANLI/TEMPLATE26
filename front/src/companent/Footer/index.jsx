import React from "react";
import style from "./index.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className={style.Footr}>
      <div className={style.Footer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10} md={8}>
              <div>
                Copyright ©2023 All rights reserved | This template is made with
                by{" "}
                <a style={{ color: "red" }} href="">
                  Colorlib
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={2} md={4}>
              <div>
                <a className={style.aa} href="">
                  <InstagramIcon />
                </a>
                <a className={style.aa} href="">
                  <FacebookIcon />
                </a>
                <a className={style.aa} href="">
                  <TwitterIcon />
                </a>
                <a className={style.aa} href="">
                  <LinkedInIcon />
                </a>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
