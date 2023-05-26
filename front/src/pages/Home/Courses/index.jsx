import * as React from "react";
import style from "./index.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Courses = () => {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <section className="Section">
      <div className="basliq">
        <h1 className="hash">Top Courses That are open for Students</h1>
        <p className="pe">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <Box style={{ width: "70%" }} sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
         {
            array && array.map((item,ind)=>{
                return(
                    <Grid key={ind} item xs={12} sm={12} md={4} lg={4}>
                    <Card
                      className={style.Card}
                      sx={{ maxWidth: "100%", height: "300px" }}
                    >
                      <CardMedia
                        sx={{ height: "80%" }}
                        image="https://preview.colorlib.com/theme/gym/img/c3.jpg"
                        title="green iguana"
                      />
                      <CardContent>
                        <a className={style.aa} href="">
                          Course Avilable
                        </a>
                        <p className={style.CardItem} color="text.secondary">
                          <span>Organic Yoga Classes</span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span style={{ color: "red" }}> $300</span>
                        </p>
                      </CardContent>
                    </Card>
                  </Grid>
                )
            })
         }
        </Grid>
      </Box>
    </section>
  );
};

export default Courses;
