require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URI);
const { initDB } = require("./models/init");
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const TopicsController = require("./controllers/TopicsController");
const LessonController = require("./controllers/LessonController");
const HashTagController = require("./controllers/HashtagController");
const UserController = require("./controllers/UsersController");
const QAndAcontroler = require("./controllers/QAndAcontroler");

initDB();

const port = process.env.PORT || 8000;
const server = http.createServer(app);

app.get("/", async (req, res) => {
  res.send(
    `<h1>API options:</h1>
        <ul>
            <li>************* tags >*************</li>
            <li>GET /topics -  provide all topics(titles)</li>
            <li>GET /lessons - provide all lessons</li>
            <li>GET /hashTags - provide all hashTags</li>
            <li>GET /topic/:idUrl - provide topic by idUrl</li>
            <li>************* users >*************</li>
            <li>GET /users - provide all users</li>
            <li>GET /admins - provide all admins</li>
            <li>GET /user/:id - provide user by id</li>
            <li>POST /createUser - create user</li>
            <li>POST /createHashTag - create hashTag</li>
            <li>POST /createTopic - create topic</li>
            <li>POST /createLesson - create lesson</li>
            <li>POST /RelateHashTagToLesson - relate hashTag to lesson</li>
            <li>POST /RelateHashTagToTopic - relate hashTag to topic</li>
            <li>************* questions >*************</li>
            <li>GET /questions - provide all questions</li>
            <li>POST /createQuestion - create question</li>
            <li>DELETE /DeleteQuestion/:id - delete question by id</li>
            <li>GET /questions/:id - provide all questions by user id</li>

            
        </ul>
        `
  );
});

app.get("/hashTags", HashTagController.GetAllHashTag);
app.get("/topics", TopicsController.GetAllTopics); //change to explenation page
app.get("/lessons", LessonController.GetAllLessons);
app.get("/topic/:idUrl", TopicsController.GetTopicByIdUrl);
app.post("/createHashTag", HashTagController.CreateHashTag); //admin protected
app.post("/createTopic", TopicsController.CreateTopic); //admin protected
// app.post('/createLesson', LessonController.CreateLesson); //admin protected
// app.post('/RelateHashTagToLesson', LessonController.RelateHashTagToLesson); //admin protected
// app.post('/RelateHashTagToTopic', TopicsController.RelateHashTagToTopic); //admin protected

app.get("/users", UserController.GetAllUsers);
app.get("/admins", UserController.GetAllAdmins); //admin protected
app.get("/user/:id", UserController.GetUserByUId);
app.post("/createUser", UserController.CreateUser); //admin protected

// working but need to return due to deploy issues- no need to make
app.get("/questions", QAndAcontroler.GetAllQuestions);
app.post("/createQuestion", QAndAcontroler.CreateQuestion);
app.delete("/DeleteQuestion/:id", QAndAcontroler.DeleteQuestion);
app.get("/questions/:id", QAndAcontroler.GetAllQuestionsByUserId);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//DOM script for getting lesson data built for mongodb

// const elements = document.querySelectorAll(".xVnXCf .lio3ib .kByKEb .YVvGBb");
// const divElements = document.querySelectorAll('.seqYL.QRiHXd');

// const result = [];

// elements.forEach((element, index) => {
//   const streamItemId = divElements[index].getAttribute('data-stream-item-id');
//   const lessonName = element.innerText;

//   result.push({
//     '_id': index + 1,
//     'course_google_no': 'NTM3MzQxMzg4MDMz',
//     'lesson_id': streamItemId,
//     'lesson_name': lessonName,
//     'hashtagsIdArr': [],
//   });
// });

// console.log(result);
