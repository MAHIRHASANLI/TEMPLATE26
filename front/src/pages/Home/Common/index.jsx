import style from "./index.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
///Card
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Common = () => {
  return (
    <div className={style.Common}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
     
          <Grid item xs={12} sm={6} md={3} lg={3}>
            {/* <Card sx={{ maxWidth: "100%" }}> */}
              <CardMedia
                sx={{ height: "300px" ,width: "99%" }}
                image="https://preview.colorlib.com/theme/gym/img/f1.jpg"
                title="green iguana"
              />
            {/* </Card> */}
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3}>
          {/* <Card sx={{ width: "100%" }}> */}
              <div className={style.Count}>
                <h6 className={style.ppp}>BASIC & COMMON REPAIRS</h6>
                <h1  className={style.h1}>Basic Revolutions</h1>
                <p className={style.p}>
                  Computer users and programmers have become so accustomed to
                  using Windows, even for the changing capabilities and the
                  appearances of the graphical.
                </p>
              </div>
              {/* </Card> */}
          </Grid>

          <Grid item  xs={12} sm={6} md={3} lg={3}>
            {/* <Card sx={{ maxWidth: "100%" }}> */}
              <CardMedia
                sx={{ height: "300px",width:"99%" }}
                image="https://preview.colorlib.com/theme/gym/img/f1.jpg"
                title="green iguana"
              />
            {/* </Card> */}
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
          {/* <Card sx={{ width: "100%" }}> */}
              <div className={style.Count}>
                <h6 className={style.ppp}>BASIC & COMMON REPAIRS</h6>
                <h1  className={style.h1}>Basic Revolutions</h1>
                <p className={style.p}>
                  Computer users and programmers have become so accustomed to
                  using Windows, even for the changing capabilities and the
                  appearances of the graphical.
                </p>
              </div>
              {/* </Card> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Common;
