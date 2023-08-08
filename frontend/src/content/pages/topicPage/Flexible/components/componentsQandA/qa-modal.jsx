import React from "react";
import { useState, useEffect } from "react";
import QuestionForm from "./new-question-form.jsx";
import QuestionsList from "./questions-list.jsx";
import QuestionDiscussionModal from "./q-discussion.jsx";
import "../componentsUI/modal.css"
import {Grid} from "../.././UiKit/Grid/Grid.jsx"
import {Line ,Rows} from "../.././UiKit/Line/Line.jsx"


function QAModal() {





    return (
            <Grid 
            // addClass={"qa-modal"}
            >
            {/* <QuestionForm/> */}
            <Line>
            {/* !!!!questios list page!!! */}
            <QuestionsList />
            </Line>
            <Line>
            {/* <QuestionDiscussionModal/> */}
            {/* <QuestionDiscussionModal /> */}
            </Line>


            </Grid>
    )
}

export default QAModal;