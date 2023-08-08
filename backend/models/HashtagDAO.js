const { ObjectId } = require("mongodb");


let collection_lessons;
let collection_hashtags;
let collection_topics;

module.exports = class HashtagDAO {
  static async injectDB(connection) {
    if (!connection) return;
    try {
      collection_lessons = await connection.collection("lessons");
      collection_hashtags = await connection.collection("hashtags");
      collection_topics = await connection.collection("topics");

    } catch (e) {
      console.log(`Could not establish connection to topic collection ${e}`);
    }
  }

  static async getAllTopics() {
    if (! await collection_topics){ 
      console.log("No collection_topics");
      return;
    }
    try {
      let topics = await collection_topics.find({}).toArray();
      return topics;

    } catch (e) {
      console.log(`Could not establish connection to topic collection ${e}`);
    }

  }
  static async getAllHashTags() {
    if (! await collection_hashtags){ 
      console.log("No collection");
      return;
    }
    try {
      let data = await collection_hashtags.find({}).toArray();
      return data;

    } catch (e) {
      console.log(`Could not establish connection to topic collection ${e}`);
    }

  }
  static async getAllLessons() {
    if (! await collection_lessons){ 
      console.log("No collection");
      return;
    }
    try {
      let data = await collection_lessons.find({}).toArray();
      return data;

    } catch (e) {
      console.log(`Could not establish connection to topic collection ${e}`);
    }

  }
  static async getTopicByIdUrl(topicIdUrl) {

    if (!collection_hashtags) {
      console.log("No collection");
      return;
    }
    try {
    let data =  collection_topics.findOne({ topic_id_url:`${topicIdUrl}` });
    
    
    return data;

    } catch (e) {
      console.log(`Could not establish connection to topic collection ${e}`);
    }
    
};
  static async createHashTag(hash_tag_name,hash_tag_content,course_google_no) {
    if (! await collection_hashtags){ 
      console.log("No collection");
      return;
    }
    try {
      let data = await collection_hashtags.insertOne({ hash_tag_name,hash_tag_content,course_google_no });
      return data;

    } catch (e) {
      console.log(`Could not establish connection to topic collection ${e}`);
    }

  }
  static async createTopic(topic_name,topic_id_url,course_google_no,hash_tags_id_arr) {
    if (! await collection_topics){ 
      console.log("No collection");
      return;
    }
    try {
      let data = await collection_topics.insertOne({ topic_name,topic_id_url,course_google_no,hash_tags_id_arr });
      return data;

    } catch (e) {
      console.log(`Could not establish connection to topic collection ${e}`);
    }

  }
  
};



