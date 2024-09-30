import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    formData: {
        fullname: "",
        email: "",
        password: "",
      },
      errors:{}
};

const formSlice = createSlice({
         name:"form",
         initialState,
         reducers:{
            updateFormData: (state, action) => {
                state.formData = {...state.formData, ...action.payload}
            },
            setErrors: (state, action)  => {
                state.errors={...state.errors, ...action.payload}
            },
            clearErrors: (state, action) => {
                state.errors =  {}
            },
            clearFormData: (state) => {
                state.formData = {}
            }
         }
})

export const {updateFormData, setErrors, clearErrors, clearFormData} =  formSlice.actions;
export default  formSlice.reducer;
