import { useState } from 'react';
import React from 'react';
import '../componentsUI/q-form.css'
import {Line,Rows} from "../../UiKit/Line/Line.jsx"
import {Grid} from "../../UiKit/Grid/Grid.jsx"
function QuestionForm() {
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionContent, setQuestionContent] = useState("");

    const changeQuestionTitle = (e) => {
        setQuestionTitle(e.target.value);
      }
      const changeQuestionContent = (e) => {
        setQuestionContent(e.target.value);
      }

    return (
        <div className="q-form">
            <form>
                {/* <label htmlFor="topics">Topic</label>
                <select id="topics" name="topics">
                    <option value="">Choose a topic from the list..</option>
                    <option value="HTMLCSS">HTML & CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="NOdeJS">Node.JS</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="SQL">SQL</option>
                    <option value="Testing">Testing</option>
                </select> */}
                <label
                    htmlFor="question-title">
                    Question Title
                </label>
                <textarea
                    name="question-title"
                    rows="1"
                    cols="30"
                    placeholder="What is your question about, exactly?"
                    value={questionTitle}
                    onChange={changeQuestionTitle}>
                </textarea>
                <label
                    htmlFor="question-text">
                    Your Question -
                </label>
                <textarea
                    name="question-text"
                    rows="10"
                    cols="30"
                    placeholder="Ask your question here.." 
                    value={questionContent}
                    onChange={changeQuestionContent}>

                </textarea>
                <div className='button-container'>
                    <button>Submit!</button>
                </div>
            </form>

        </div>
    )
}

export default QuestionForm;