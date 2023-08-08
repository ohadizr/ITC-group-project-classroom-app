import React from 'react'
import './QandANavBar.css'
import { useState, useEffect } from 'react';

export default function QandANavBar(props) {

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
        <div className="topNavAdmin">
          <button
            className={`customBtn borderBtn ${
              navTopLevelActive === "edit_question" ? activeBorderBtn : ""
            }`}
            value="edit_question"
            onClick={(e) => {
              e.preventDefault();
              setNavTopLevelActive("edit_question");
              setNavLevel("2")
              setNavTwoChoice("edit_question")
            }}
          >
            <span>Edit Question</span>
          </button>
          <button
            className={`customBtn borderBtn ${
              navTopLevelActive === "add_question" ? activeBorderBtn : ""
            }`}
            value="add_question"
            onClick={(e) => {
              e.preventDefault();
              setNavTopLevelActive("add_question");
              setNavLevel("2")
              setNavTwoChoice("add_question")
            }}
          >
            <span>Add Question</span>
          </button>
        </div>
    </>
  )
}
