import React from "react";
import "./Admin.css";
import { useState, useEffect } from "react";
import AddQform from "./AdminComponents/formsQandA/AddQform.jsx";
import QAndANavBar from "./AdminComponents/QAndANavBar.jsx";
import EditQandA from "./AdminComponents/formsQandA/EditQandA.jsx";
import FormsNav from "./UserComponents/FormsNav.jsx";
import BookOneOnOne from "./UserComponents/BookOneOnOne.jsx";
import StudentForms from "./UserComponents/StudentForms.jsx";
import UserTopNav from "./UserComponents/UserTopNav.jsx";

export default function User(props) {
  const { userData } = props;
  const userName = userData.displayName;
  const userNameFirstLetterCapital = userName.charAt(0).toUpperCase() + userName.slice(1);

  const circularBtnActive = "circularBtnActive";
  const arrowBtnActive = "arrowBtnActive";
  const [navLevel, setNavLevel] = useState("0");
  const [navOneChoice, setNavOneChoice] = useState("");
  const [navTwoChoice, setNavTwoChoice] = useState("");


  useEffect(() => {
    console.log("navLevel", navLevel);
    console.log("navOneChoice", navOneChoice);
    console.log("navTwoChoice", navTwoChoice);

  }, [navLevel]);

  return (
    <div className="adminContainer">
           <div className='titleContainer'>
      <h1 className="userTitle">Wellcome: {" "+ userNameFirstLetterCapital}</h1>
      <div className="userRollPlacment">
      <h5 className="userRoll">Student</h5>
      </div>
      </div>
      <div className="pageCount">
      <div>
        <button
          className={`arrowBtn ${
           navLevel==="1" || navLevel==="2" ? arrowBtnActive : ""
          }`}
        onClick={
          () => {
            if(navLevel === "1" ){
              setNavLevel("0")
            }
            if(navLevel === "2" ){
              setNavLevel("1")
          }

        }}
        >
        <span>
        ←     
        </span>
  
        </button>
          
      </div>
      <div>
        <button
          className={`circularBtn ${
            navLevel === "0" || navLevel==="1" || navLevel==="2" ? circularBtnActive : ""
          }`}
          value="0"
          onClick={(e) => {
            e.preventDefault();
            setNavLevel("0");
          }}
        >
          <span></span>
        </button>
        <button
          className={`circularBtn ${
            navLevel==="1" || navLevel==="2" ? circularBtnActive : ""
          }`}
          value="1"
          onClick={(e) => {
            e.preventDefault();
            {navOneChoice.length>0 ? setNavLevel("1"): null}
          }}
        >
          <span></span>
        </button>
        <button

          className={`circularBtn ${
            navLevel === "2" ? circularBtnActive : ""
          }`}
          value="2"
          onClick={(e) => {
            e.preventDefault();
            {navTwoChoice.length>0 ? setNavLevel("2"): null}
            
          }}
        >
          <span></span>
        </button>
      </div>
      <div>
        <button
          className={`arrowBtn ${
           (navLevel==="0" || navLevel==="1" ? arrowBtnActive : "")
           
          }`}
        onClick={
          () => {
            if(navLevel === "0" && navOneChoice.length>0){
              setNavLevel("1")
            }
            if(navLevel === "1" && navTwoChoice.length>0 ){
              setNavLevel("2")
          }}
        }
        >
        <span>→</span>
     
        </button>
          
      </div>
      </div>
      <div className="adminMain">
      {navLevel === "0" ? (
        <UserTopNav
          setNavLevel={setNavLevel}
          setNavOneChoice={setNavOneChoice}
        />
      ) : null}
      
      {navLevel === "1" && navOneChoice === "formsNav" ? (
        <FormsNav
          setNavLevel={setNavLevel}
          setNavTwoChoice={setNavTwoChoice}
        />
      ) : null}
      {navLevel === "1" && navOneChoice === "qa" ? (
        <QAndANavBar
          setNavLevel={setNavLevel}
          setNavTwoChoice={setNavTwoChoice}
        />
      ) : null}

      {navLevel === "2" && navTwoChoice==="oneOnOne" ? <BookOneOnOne/>: null} 
      {navLevel === "2" && navTwoChoice==="forms" ?  <StudentForms/> : null}
      {navLevel === "2" && navTwoChoice==="add_question" ? <AddQform /> : null}
      {navLevel === "2" && navTwoChoice==="edit_question" ? <EditQandA /> : null}
      </div>
    </div>
  );
}
