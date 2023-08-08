const HashtagDAO = require("../models/HashtagDAO");
const { ObjectId } = require("mongodb");
module.exports = class LessonController {

  static async GetAllLessons(req, res) {
    try {
      const LessonList = await HashtagDAO.getAllLessons();
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


