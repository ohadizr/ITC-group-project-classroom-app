import React from 'react'
import './AddQform.css'
import { useState, useEffect} from 'react'

export default function AddQform() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [contentDetails, setContentDetails] = useState("");

  useEffect(() => {
    console.log("questionTitle", questionTitle);
    console.log("contentDetails", contentDetails);
  }, [questionTitle, contentDetails]);



async function handleSubmit() {
  await createNewQuestion(questionTitle, contentDetails);
}



async function createNewQuestion(questionTitle, contentDetails) {
  const response = await fetch("https://vozm.onrender.com/createQuestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q_title: questionTitle,
      q_content: contentDetails,
      user_id: "12345678", //currently hard coded
      course_google_no: "NTM3MzQxMzg4MDMz" //currently hard coded
    }),
  });
}
return (
  <>
    <div className="addQuestionContainer">
      <h1>Add Question to Q&A</h1>
      <form className="addQuestionForm">
        <label>Question Title:</label>
        <input
          className="inputAreaQuestionTitle"
          type="text"
          placeholder="*questionTitle*"
          value={questionTitle}
          onChange={(e) => {
            setQuestionTitle(e.target.value);
          }}
        />
        <label>Content:</label>
        <input
          className="textareaContentDetails"
          type="text"
          name="content_details"
          value={contentDetails}
          placeholder="*content*"
          onChange={(e) => {
            setContentDetails(e.target.value);
          }}
        />
  
        <button
          className="customBtn borderBtn activeBorderBtn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
        <span>Add Question</span>
          
        </button>
      </form>
    </div>
  </>
  )
}
