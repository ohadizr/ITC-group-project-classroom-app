import '../componentsUI/question.css'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Line,Rows} from "../../UiKit/Line/Line.jsx"
import {Grid} from "../../UiKit/Grid/Grid.jsx"
function Question(props) {
    const [user, setUser] = useState("")
    const { q } = props;
    console.log("questions", q);

    async function getUserByUid() {
        try {
            const response = await fetch(`https://vozm.onrender.com/user/${q.uid}`);
            const data = await response.json();
    
            setUser(data.name);
            return ;
        } catch (error) {
            console.log(error)
    }
    }
    useEffect(() => {
        getUserByUid();
    }, []);



    return (
        <div className="question">
            {/* mapping the array of results and showing like the last 5 questions from the DB*/}
            {/* all the data - the topic, name, date, and question content received from that DB and provided as props */}
            <div className="header">
            <Line>
                <div className='details'>
                    <p>{q.topic}</p>
                    <p>{user}</p>
                    <p>{q.date}</p>
                </div>
                </Line>
                <Line>
                <div className='title'>
                    <div className='avatar'></div>
                    <h3>{q.q_title}</h3>
                </div>

            </Line>
            </div>
            <div
                className="content"
            // onClick={a functions that open a modal that shows all the discusion}
            >
                <p>{q.q_content}</p>
            </div>
            {/* <div>
                <button>reply</button>
            </div> */}
        </div>
    )
}

export default Question;