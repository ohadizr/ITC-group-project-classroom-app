import React from "react";
import "./forms.css"

export default function StudentForms() {

  const MileStone4TimeSlot = {
    name: "MileStone4 Time Slots",
    link: "https://docs.google.com/spreadsheets/d/1m9liVvIkQSPG_geC_q7Pb-zLQAtmnSN7aAgA-Fpo6TU/edit?usp=sharing",
  };
  const GroupProjectTeamSlots = {
    name: "Group Project Team Slots",
    link: "https://docs.google.com/spreadsheets/d/1m9liVvIkQSPG_geC_q7Pb-zLQAtmnSN7aAgA-Fpo6TU/edit?usp=sharing",
  };

  return (
    <>
    <div className="formContainer">
      <div className="formTitleContainer">
      <h2 className="formTitle"> Forms</h2>
      </div>
      <div className="formLinkLinksContainer">
        <a href={MileStone4TimeSlot.link}>{MileStone4TimeSlot.name}</a>
        <a href={GroupProjectTeamSlots.link}>{GroupProjectTeamSlots.name}</a>
      </div>
      </div>
    </>
  );
}

