import React, { useState } from "react";
import Filter from "./Component/filter/Filter";
import Navbar from "./Component/navbar/Navbar";
import SideBar from "./Component/sidebar/SideBar";
import SignUp from "./Component/authorization/SignUp";
import { useDispatch, useSelector } from "react-redux";
import Videos from "./Component/Video/Videos";


export default function App() {
  const isSignUpOpen = useSelector((state) => state.ShowSignUpForm);
  return (
    <div className="app">
      <Navbar/>
      <Filter className="filter" />
      {isSignUpOpen && <SignUp/>}
      <SideBar className="sidebar" />
      <Videos/>
    </div>
  );
}
