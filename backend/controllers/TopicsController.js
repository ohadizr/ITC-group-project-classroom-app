const HashtagDAO = require("../models/HashtagDAO");
const { ObjectId } = require("mongodb");
// const {validateTopic } =require(".././validations/HashtagValidations");

module.exports = class TopicController {

  static async GetAllTopics(req, res) {
    try {
      const topicsList = await HashtagDAO.getAllTopics();
      res.json(topicsList);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async GetTopicByIdUrl(req, res, next,) {
    try {
      const topicIdUrl = req.params.idUrl;
      const topic = await HashtagDAO.getTopicByIdUrl(topicIdUrl);
      if (!topic) {
        return res.status(404).json({
          success: false,
          message: "Topic not found",
        });
      }
      res.json(topic);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async CreateTopic(req, res, next,) {
    try {
      // const valid = validateTopic(req.body);
      // if (!valid) {
      //   return res.status(400).json({
      //     success: false,
      //     message: "invalid request body",
      //   });
      // }
      const { topic_name, topic_id_url,course_google_no,hash_tags_id_arr } = req.body;
      const newTopic = await HashtagDAO.createTopic(topic_name, topic_id_url,course_google_no,hash_tags_id_arr);
      res.json(newTopic);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }

};


