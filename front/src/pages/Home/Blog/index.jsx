import * as React from "react";
import style from "./index.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useGlobalData } from "../../../globall";
import { DeleteById, GetAll } from "../../../api/requests";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Blog = () => {
  const [global, setGlobal] = useGlobalData();
  React.useEffect(() => {
    GetAll().then((res) => {
      setGlobal(res);
    });
  }, []);

  function handleChange(e){
    GetAll(e.target.value).then((res) => {
      setGlobal(res);
    });
   }
  return (
    <section className="Section">
      <div className="basliq">
        <h1 className="hash">We care about what we offer</h1>
        <p className="pe">
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <div className={style.search}>
      <TextField   name="name" onChange={(e)=>handleChange(e)} id="outlined-basic" label="Search Name" variant="outlined" />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {global &&
            global.map((item) => {
              return (
                <Grid  key={item._id} item xs={12} md={4} lg={4} sm={6}>
                  <Card
                   
                    sx={{ width: "340px", height: "260px" }}
                  >
                   <div className={style.icons}>
                   <i className={item.image}></i>
                   </div>
                    <CardContent>
                     <Link to={`/detailelement/${item._id}`}> <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography></Link>
                      <Typography variant="body2" color="text.secondary">
                        {item.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button style={{display:"block", margin:"0 auto"}}
                        variant="contained"
                        size="small"
                        onClick={(_id) => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              DeleteById(item._id)
                              setGlobal(global.filter(m=>m._id!==item._id))
                              Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                              );
                            }
                          });
                        }}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </section>
  );
};

export default Blog;
