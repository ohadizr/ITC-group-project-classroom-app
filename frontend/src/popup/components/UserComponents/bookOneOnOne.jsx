import React from "react";

export default function BookOneOnOne() {
  const keren = {
    name: "keren",
    link: "https://app.acuityscheduling.com/schedule.php?owner=12116384&calendarID=6845261",
  };
  const Mark = {
    name: "Shay",
    link: "https://app.acuityscheduling.com/schedule.php?owner=12116384&calendarID=6845261",
  };
  const Shay = {
    name: "Mark",
    link: "https://app.acuityscheduling.com/schedule.php?owner=12116384&calendarID=6845261",
  };
  return (
    <>
      <div className="formContainer">
      <div className="formTitleContainer">
      <h2 className="formTitle">one On One booking </h2>
      </div>
      <div className="formLinkLinksContainer">
        <a href={keren.link}>book 1 on 1 with {keren.name}</a>
        <a href={Mark.link}>book 1 on 1 with {Mark.name}</a>
        <a href={Shay.link}>book 1 on 1 with {Shay.name}</a>
      </div>
      </div>
    </>
  );
}
