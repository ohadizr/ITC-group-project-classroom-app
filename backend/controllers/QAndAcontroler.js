const UsersDAO = require("../models/UsersDAO");
const { ObjectId } = require("mongodb");

module.exports = class QAndAController {

  static async GetAllQuestions (req, res) {
    try {
      const LessonList = await UsersDAO.getAllQuestions();
      res.json(LessonList);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  
  static async CreateQuestion (req, res) {
    try {
      const { q_title, q_content,user_id ,course_google_no} = req.body;
      const newQuestion = await UsersDAO.createQuestion(q_title, q_content, user_id, course_google_no);
      res.json(newQuestion);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async DeleteQuestion (req, res) {
    try {
      const { id } = req.params;
      const deleteQuestion = await UsersDAO.deleteQuestion(id);
      res.json(deleteQuestion);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async GetAllQuestionsByUserId (req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const LessonList = await UsersDAO.getAllQuestionsByUserId(id);
      res.json(LessonList);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  
};


