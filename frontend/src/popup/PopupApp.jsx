import React from 'react'
import  { useState, useEffect,useContext } from 'react';
import { AuthContext } from '../content/contexts/AuthContext.jsx';
import './Popup.css'
import User from './components/User.jsx'
import LoginContainer from './components/AuthComponents/LoginContainer.jsx'
import Admin from './components/Admin.jsx'
import SignOut from './components/SignOut.jsx'


export default function PopupApp() {
  const {
    setIsAdmin,
    isAdmin,
    addNewUser,
    signInUser,
    loginError,
    setLoginError,
    signUpError,
    setSignUpError,
    userDisplayName,
    setUserDisplayName,
    isLoggedIn,
    signUserOut,
    userID,
    userInformation
      
   } = useContext(AuthContext);

  useEffect(() => {
    console.log("userInformation", userInformation);
    if (userInformation) {
      async function checkIfUserIsAdmin() {
        const response = await fetch(`https://vozm.onrender.com/user/${userInformation.uid}`)
        const data = await response.json();
        console.log("data", data);
        console.log("data.isAdmin", data.isAdmin);
        if (data.isAdmin===true) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
        
      }
      checkIfUserIsAdmin() 
    }
  }, [userInformation]);
  useEffect(() => {
    console.log("isAdmin", isAdmin);
  }, [isAdmin]);
  

  
  return (
    <div className='Popup'>
    <div className='topNav'>

    <button
      className='emptyBtn'
      >
    <img
    src={"https://www.itc.tech/wp-content/uploads/2020/09/blue-newlogoITC-nobackground-1024x600.png"}
    alt="itc logo"
    width="60"
    />

    </button>
    <h3>ITC Classroom</h3>
    <button
    className='emptyBtn'
    >
    <img
    src={"https://cdn-icons-png.flaticon.com/512/6915/6915987.png"}
    alt="profile logo"
    width="35"

    />
    </button>

    </div>

      <div className='mainContainer'>
       {isLoggedIn ?
        <div>
          {!isAdmin ? <User userData={userInformation}/>:<Admin userData={userInformation}/>}
        </div>
       : <LoginContainer />}  
      </div>
  
        <div className='footerContainerNav'>
        <button 
        className='emptyBtn'
        onClick={() => {  
            chrome.tabs.create({ url: "https://us02web.zoom.us/j/85242664961?pwd=Y0oyR3NNc3BkemRieEVyckx0NWxXZz09#success" });        
        }}
        >
        <img
        src={"https://logos-world.net/wp-content/uploads/2021/03/Zoom-Logo.png"}
        alt="zoom logo"
        width="50"

        />

        </button>
        {isLoggedIn ? <SignOut/> : <div></div>}
        <button
        className='emptyBtn'
               onClick={() => {  
            chrome.tabs.create({ url: "https://classroom.google.com/w/NTM3MzQxMzg4MDMz/tc/NTk4NTY4MTAwNzU1" });        
        }}
        >
        <img
        src={"https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png"}
        alt="google classroom logo"
        width="50"

        />
        </button>
        </div>
        
    </div>
  )
}
