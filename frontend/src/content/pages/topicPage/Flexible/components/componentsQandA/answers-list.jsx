// import Question from "./question.jsx";
import React from "react";
import Answer from "./answer.jsx";
import '../componentsUI/answer.css'
import {Line,Rows} from "../../UiKit/Line/Line.jsx"
import {Grid} from "../../UiKit/Grid/Grid.jsx"
function AnswersList() {
    const tempAnswerArray = ["a1", "a2", "a3" ];
    return (
        <div className="answers_container">
            <div className="header">

                <h2>Answers..</h2>

            </div>
            {tempAnswerArray.map((a) => (
                <Answer a={a}/>

            ))}

            <div>
                <p>See more..</p>
            </div>
        </div>
    )
}

export default AnswersList;