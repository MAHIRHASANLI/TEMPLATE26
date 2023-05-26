import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "./validation";
import style from "./index.module.css"
import {  TextField } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { PostById } from "../../api/requests";
const AddElement = () => {
  const navigate = useNavigate()
  function handleSubmit(values,actions){
    console.log(values);
    PostById(values)
    actions.resetForm()
    navigate("/")
  }
  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      title: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className={style.Addelem}>
      <form className={style.Formm} onSubmit={formik.handleSubmit}>
        <TextField style={{width:"100%", marginBottom:"20px"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur.image}
          value={formik.values.image}
          name="image"
          error={formik.errors.image && formik.touched.image ? true : false}
          id="outlined-basic"
          label="Icons"
          variant="outlined"
        />
        <TextField style={{width:"100%", marginBottom:"20px"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur.name}
          value={formik.values.name}
          name="name"
          error={formik.errors.name && formik.touched.name ? true : false}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField style={{width:"100%", marginBottom:"20px"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur.title}
          value={formik.values.title}
          name="title"
          error={formik.errors.title && formik.touched.title ? true : false}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <button className={style.Button} type="submit">
          ADD ELEMENT
        </button>
      </form>
    </div>
  );
};

export default AddElement;
