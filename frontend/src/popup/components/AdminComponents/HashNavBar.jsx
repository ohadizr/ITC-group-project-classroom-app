import React from 'react'
import { useState, useEffect } from "react";



export default function HashNavBar(props) {


  const { setNavLevel,setNavTwoChoice } = props; 

  useEffect(() => {

  }, [setNavLevel]);


  const [navTopLevelActive, setNavTopLevelActive] = useState("");
  const activeBorderBtn = "activeBorderBtn";
  useEffect(() => {
    console.log("navTopLevelActive", navTopLevelActive);
  }, [navTopLevelActive]);
  return (
    <>
      <div className="topNavAdmin">
        <button
          className={`customBtn borderBtn ${
            navTopLevelActive === "attach_hashtag" ? activeBorderBtn : ""
          }`}
          value="attach_hashtag"
          onClick={(e) => {
            e.preventDefault();
            setNavTopLevelActive("attach_hashtag");
            setNavLevel("2")
            setNavTwoChoice("attach_hashtag")
          }}
        >
          <span>attach Hashtag</span>
        </button>
        <button
          className={`customBtn borderBtn ${
            navTopLevelActive === "add_hashtags" ? activeBorderBtn : ""
          }`}
          value="add_hashtags"
          onClick={(e) => {
            e.preventDefault();
            setNavTopLevelActive("add_hashtags");
            setNavLevel("2")
            setNavTwoChoice("add_hashtags")
          }}
        >
          <span>Add Hashtags</span>
        </button>
      </div>
      <div className="mainContainerAdmin">
      </div>
    </>
  )
}
