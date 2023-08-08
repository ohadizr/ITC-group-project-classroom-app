import '../componentsUI/question.css'
import React from 'react'
import {Line,Rows} from "../../UiKit/Line/Line.jsx"
import {Grid} from "../../UiKit/Grid/Grid.jsx"
function Answer(props) {
    const { a } = props;


    return (
        // <div className="answer">
        <Grid>
            {/* mapping the array of results and showing like the last 5 questions from the DB*/}
            {/* all the data - the topic, name, date, and question content received from that DB and provided as props */}
            <div className="header">
                <div className='details'>
                    <p>{a}</p>
                    <p>username...</p>
                    <p>date of question..</p>
                </div>
                <div className='title'>
                    <div className='avatar'></div>
                    <h3>Question Title...</h3>
                </div>
            </div>
            <div
                className="content"
            // onClick={a functions that open a modal that shows all the discusion}
            >
                <p>Lorem ipsum dolor sit amet, conse.</p>
            </div>
            {/* <div>
                <button>reply</button>
            </div> */}
            </Grid>
    )
}

export default Answer;