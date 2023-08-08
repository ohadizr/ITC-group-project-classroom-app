import React from 'react'
import { useState, useEffect } from 'react';

export default function FormsNav(props) {
  const { setNavLevel,setNavTwoChoice } = props; 

    useEffect(() => {
  
      setNavTwoChoice(navTopLevelActive)
    
    }, [setNavLevel]);
  
  
    const [navTopLevelActive, setNavTopLevelActive] = useState("");
    const activeBorderBtn = "activeBorderBtn";
    useEffect(() => {

    }, [navTopLevelActive]);
    return (
      <>
        <div className="topNavUser">
          <button
            className={`customBtn borderBtn ${
              navTopLevelActive === "oneOnOne" ? activeBorderBtn : ""
            }`}
            value="oneOnOne"
            onClick={(e) => {
              e.preventDefault();
              setNavTopLevelActive("oneOnOne");
              setNavLevel("2")
              setNavTwoChoice("oneOnOne")
            }}
          >
            <span>book 1 on 1</span>
          </button>
          <button
            className={`customBtn borderBtn ${
              navTopLevelActive === "forms" ? activeBorderBtn : ""
            }`}
            value="forms"
            onClick={(e) => {
              e.preventDefault();
              setNavTopLevelActive("forms");
              setNavLevel("2")
              setNavTwoChoice("forms")
            }}
          >
            <span>Forms</span>
          </button>
        </div>
    </>
  )
}
