const HashtagDAO = require("../models/HashtagDAO");
const { ObjectId } = require("mongodb");
// const { validateHasHtag } =require("../validations/HashTagValidations");
module.exports = class HashTagController {

  static async GetAllHashTag(req, res) {
    try {
      const HashTagList = await HashtagDAO.getAllHashTags();
      res.json(HashTagList);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async CreateHashTag(req, res) {
    try {
      // const valid = validateHasHtag(req.body);
      // if (!valid) {
      //   return res.status(400).json({
      //     success: false,
      //     message: "invalid request body",
      //   });
      // }
      const { hash_tag_name,hash_tag_content,course_google_no } = req.body;
      const newHashTag = await HashtagDAO.createHashTag(hash_tag_name,hash_tag_content,course_google_no);
      res.json(newHashTag);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
    

    
  
  
};




