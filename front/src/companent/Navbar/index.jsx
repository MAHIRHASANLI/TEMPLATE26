import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css"
import { Button } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Navbar = () => {
  return (
    <div className={style.Header}>
      <div className={style.Navbar}>
        <div className={style.SolNavbar}>
          We believe we helps people <br />
          for happier lives
        </div>

        <div className={style.OrtaNavbar}>
          <img
            src="https://preview.colorlib.com/theme/gym/img/logo.png"
            alt=""
          />
        </div>

        <div className={style.SagNavbar}>
          <div
            className={style.Cvadrat}
          ><LocalPhoneIcon style={{color:"white"}}/></div>
        </div>
      </div>
      <div className={style.AltNavbar}>
        <Link to="/"><Button className={style.Button}>Home</Button></Link>
        <Link to="/addelement"><Button className={style.Button}>Add Element</Button></Link>
        <Button className={style.Button}>We Affer</Button>
        <Button className={style.Button}>Top Course</Button>
        <Button className={style.Button}>Plan</Button>
        <Button className={style.Button}>Pages</Button>
      </div>
    </div>
  );
};

export default Navbar;
