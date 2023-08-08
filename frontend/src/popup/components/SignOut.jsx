import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../content/contexts/AuthContext.jsx";
import "./SignOut.css";

export default function SignOut() {
  const { signUserOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);

  const logOutUser = () => {
    signUserOut();
  };

  return (
    <div className="SignOut">
      {/* <button className="emptyBtn">
        <img
          src={
            "https://www.itc.tech/wp-content/uploads/2020/09/blue-newlogoITC-nobackground-1024x600.png"
          }
          alt="itc logo"
          width="60"
        /> */}
      {/* </button> */}
      {/* <button className="emptyBtn"> */}
        {/* <img */}
          {/* src={"https://cdn-icons-png.flaticon.com/512/6915/6915987.png"} */}
          {/* alt="profile logo" */}
          {/* width="35" */}
          {/* // onClick={() => { */}
          {/* //   setLoggedIn(true); */}
          {/* // }} */}
        {/* /> */}
      {/* </button> */}
      <button
        className="signOutBtn"


        onClick={() => {
          logOutUser();
        }}
      >
        SignOut
      </button>
    </div>
  );
}
