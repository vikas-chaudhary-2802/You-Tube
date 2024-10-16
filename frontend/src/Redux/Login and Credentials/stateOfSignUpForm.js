import { createSlice } from "@reduxjs/toolkit";


export const stateOfSignUpForm = createSlice({
    name : 'ShowSignUpForm',
    initialState : false,
    reducers :{
        OpenSignUpForm:(state)=>{
            return true;
        },
        CloseSignUpForm:(state)=>{
            return false;
        }
    }
})

export const {OpenSignUpForm, CloseSignUpForm} = stateOfSignUpForm.actions;
export default stateOfSignUpForm.reducer;