import React from "react";
import "./CreateHashFrom.css";
import { useState } from "react";

export default function CreateHashFrom() {
  const textForArrContainer =
    "*content Arr - added automatically from [add hashtag to arr] button add all the relevant tags before pressing Create Hashtag*";
  const [contentArr, setContentArr] = useState([]);
  const [hashtagName, setHashtagName] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [contentDetails, setContentDetails] = useState("");

  function handleArrSubmit() {
    console.log(contentArr);
    let content = `${contentTitle}:${contentDetails}`;
    setContentArr([...contentArr, content]);
    setContentTitle("");
    setContentDetails("");
  }
  async function createHashTag(name, content) {
    const url = "https://vozm.onrender.com/createHashTag";
    const data = {
      hash_tag_name:  name ,
      hash_tag_content: content ,
      course_google_no: "NTM3MzQxMzg4MDMz",
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);
      console.log({ options,data });
      const json = await response.json();
      console.log({ json });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleSubmit() {
    createHashTag(hashtagName, contentArr);
    setHashtagName("");
    setContentArr([]);
    setContentTitle("");
    setContentDetails("");
  }
  return (
    <>
      <div className="createHashTag">
        <h3>Create New Hashtag</h3>
        <form className="createHashTagForm">
          <label>Hashtag Name:</label>
          <input
            className="inputAreaAdminTitles"
            type="search"
            placeholder="*Hashtag name*"
            value={hashtagName}
            onChange={(e) => {
              setHashtagName(e.target.value);
            }}
          />
          <label>Content</label>
          <input
            className="inputAreaAdminTitles"
            type="text"
            name="content_title"
            placeholder="*content title*"
            value={contentTitle}
            onChange={(e) => {
              setContentTitle(e.target.value);
            }}
          />
          <input
            className="inputAreaAdminDetails"
            type="text"
            name="content_details"
            value={contentDetails}
            placeholder="*content*"
            onChange={(e) => {
              setContentDetails(e.target.value);
            }}
          />
          <div>
            <button
              className="contentAddBtn"
              disabled={
                contentDetails.length === 0 || contentTitle.length === 0
              }
              onClick={(e) => {
                e.preventDefault();
                handleArrSubmit();
              }}
            >
              add hashtag to Arr
            </button>
          </div>
          <div className="added_content_arr">
            <ul>
              {contentArr.length === 0
                ? textForArrContainer
                : contentArr.map((content, index) => {
                    return <li key={index}>{content}</li>;
                  })}
            </ul>
          </div>

          <button
            className="submitBtn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            Create Hashtag
          </button>
        </form>
      </div>
    </>
  );
}
