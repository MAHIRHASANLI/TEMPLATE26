import * as Yup from "yup"
export const validationSchema = Yup.object().shape({
    image: Yup.string(3).required(),
  name: Yup.string().min(5).required(),
  title: Yup.string().min(5).required()
})