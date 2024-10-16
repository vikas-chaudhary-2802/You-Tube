import { createSlice } from "@reduxjs/toolkit";

export const LoginStatus = createSlice({
    name : "Login_Status",
    initialState : false,
    reducers:{
        IsLoggedIn : (state)=>{
            return true;
        },
        NotLoggedIn : (state)=>{
            return false;
        },
    }
})

export const {IsLoggedIn, NotLoggedIn} = LoginStatus.actions;
export default LoginStatus.reducer;