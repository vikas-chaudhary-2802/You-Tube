import { configureStore } from "@reduxjs/toolkit";
import stateOfSignUpForm from "./Login and Credentials/stateOfSignUpForm";
import LoginStatus from "./Login and Credentials/loginState";

export const store = configureStore({
  reducer: {
    ShowSignUpForm: stateOfSignUpForm,
    Login_Status: LoginStatus,
  },
});
