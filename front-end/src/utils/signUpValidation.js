import * as Yup from "yup";
import { clearErrors, clearFormData, setErrors } from "../reducers/signUpreducer";

const validationSchemaSignUp = Yup.object({
    fullname: Yup.string().required("First name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be 8 characters long"),
  });


  export const validateSignUp = () => async (dispatch, getState) => {
    const {formData} = getState().form;

    try {
        await validationSchemaSignUp.validate(formData, { abortEarly: false });
        dispatch(clearErrors());
        dispatch(clearFormData())
        return true; // Form is valid
    } catch (error) {
        let newErrors = {}
        error.inner.forEach((err) => {
            newErrors[err.path] = err.message
        })
        dispatch(setErrors(newErrors)); // Dispatch validation errors
        return false; //
    }
  }