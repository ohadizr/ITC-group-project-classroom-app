import React from "react";
import { useState, useEffect } from "react";

export default function UserTopNav(props) {


  const { setNavLevel,setNavOneChoice } = props; 

  useEffect(() => {

    setNavOneChoice(navTopLevelActive)
  
  }, [setNavLevel]);


  const [navTopLevelActive, setNavTopLevelActive] = useState("hashtags");
  const activeBorderBtn = "activeBorderBtn";

  return (
    <>
      <div className="topNavAdmin">
        <button
          className={`customBtn borderBtn ${
            navTopLevelActive === "qa" ? activeBorderBtn : ""
          }`}
          value="qa"
          onClick={(e) => {
            e.preventDefault();
            setNavTopLevelActive("qa");
            setNavLevel("1")
            setNavOneChoice("qa")
          }}
        >
          <span>Q&A</span>
        </button>
        <button
          className={`customBtn borderBtn ${
            navTopLevelActive === "formsNav" ? activeBorderBtn : ""
          }`}
          value="formsNav"
          onClick={(e) => {
            e.preventDefault();
            setNavTopLevelActive("formsNav");
            setNavLevel("1")
            setNavOneChoice("formsNav")
          }}
        >
          <span>Forms</span>
        </button>
      </div>

    </>
  );
}
