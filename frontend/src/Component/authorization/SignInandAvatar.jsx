import React, { useEffect, useRef, useState } from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Style from "./SignInandAvatar.module.css";
import {useNavigate} from 'react-router-dom';
import avatar from '../../assets/people.png'
import GoogleIcon from "@mui/icons-material/Google";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from 'react-redux';
import { OpenSignUpForm } from '../../Redux/Login and Credentials/stateOfSignUpForm';
import { NotLoggedIn } from '../../Redux/Login and Credentials/loginState';

//This Component is called in Navbar.jsx
export default function SignInandLogOut() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.Login_Status);
  const [showMenu, setShowMenu] = useState(false);
  const AvatarMenu = useRef(null);
  let Name = "";
  let Email = "";
  // Function to handle clicks outside of the menu
  const handleClickOutside = (event) => {
    if (AvatarMenu.current && !AvatarMenu.current.contains(event.target)) {
      setShowMenu(false); // Close the menu if clicking outside
    }
  };
  // Use useEffect to add/remove event listener for clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Parse user info from localStorage if it exists
  const user = localStorage.getItem("user");

  if (user) {
    const userData = JSON.parse(user); // Parse the string into an object
    Name = userData.name; // Access the name property
    Email = userData.email; // Access the email property
  }
  const handleLogOut = () => {
    localStorage.removeItem("user"); // Delete
    dispatch(NotLoggedIn());
  };
  return (
    <div className={Style.ButtonParentContainer}>
      {isSignedIn ? (
        <>
          <div
            className={Style.AvatarContainer}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <img src={avatar} alt="Avatar" className={Style.Avatar} />
          </div>
          {showMenu && (
            <div className={Style.AvatarMenu} ref={AvatarMenu}>
              <div className={Style.UserDesc}>
                <img
                  src={avatar}
                  alt="Avatar"
                  className={Style.AvatarMenuAvatar}
                />
                <div className={Style.UserDescText}>
                  <span className={Style.AvatarMenuUserName}>{Name}</span>
                  <br />
                  <span className={Style.AvatarMenuEmail}>{Email}</span>
                </div>
              </div>
              <ul>
                <li>
                  <GoogleIcon /> Google Account
                </li>
                <li>
                  <SwitchAccountIcon /> Switch Accounts
                </li>
                <li onClick={handleLogOut}>
                  <LogoutIcon /> Sign Out
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <div className={Style.buttonContainer}>
          <button
            className={Style.SignInButton}
            onClick={() => dispatch(OpenSignUpForm())}
          >
            <AccountCircleIcon fontSize="small" />
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
