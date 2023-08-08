import Question from "./question.jsx";
import React from "react";
import { Line, Rows } from "../../UiKit/Line/Line.jsx";
import { Grid } from "../../UiKit/Grid/Grid.jsx";
import { useState, useEffect } from "react";

function QuestionsList() {
   const [questions, setQuestions] = useState([]);
    async function getQuestions() {
         const response = await fetch('https://vozm.onrender.com/questions');
         const data = await response.json();
         //add Key to each question then set the state
            data.forEach((q, i) => {
                q.key = i;
            });

         setQuestions(data);
         return
      }
        useEffect(() => {
        getQuestions();
        }, []);

    
  return (
    <Rows className="container">
      <Rows className="header">
        <h2>Search Questions</h2>
        <Rows addClass={"serach_container"}>
          <input
            type="search"
            name="search"
            className="searchInput"
            placeholder="Search"
          ></input>

          <select id="topics" className="topicsListForSearchToggle">
            <option value="">Topic</option>
            <option value="HTMLCSS">HTML & CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="NOdeJS">Node.JS</option>
            <option value="MongoDB">MongoDB</option>
            <option value="SQL">SQL</option>
            <option value="Testing">Testing</option>
          </select>
          <button className="searchBtn">Search</button>
        </Rows>
      </Rows>

      <Rows>
        {/* for each question the questions arry, get <question q={question}
         */}
        {questions.map((q) => (
          <Question q={q} />
        ))}
        
      </Rows>
    </Rows>
  );
}

export default QuestionsList;
