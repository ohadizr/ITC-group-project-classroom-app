import React from "react";
import { useState, useEffect } from "react";


export default function TopNavBar(props) {


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
            navTopLevelActive === "hashtags" ? activeBorderBtn : ""
          }`}
          value="hashtags"
          onClick={(e) => {
            e.preventDefault();
            setNavTopLevelActive("hashtags");
            setNavLevel("1")
            setNavOneChoice("hashtags")
          }}
        >
          <span>Hashtags</span>
        </button>
      </div>

    </>
  );
}
