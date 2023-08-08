import axios from "axios";
import topics from "../helpers/mockDB.js";

const axiosCustomized = axios.create({
  // withCredentials: true,
  baseURL: "https://vozm.onrender.com/",
});

class TopicsAPI {
  static async getTagsByTopic(topicIdUrl) {
    if (!topicIdUrl) return;

    try {
      const response = await axiosCustomized.get(`/topic/${topicIdUrl}`);

      return response.data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  static async getTopicData(topicIdUrl) {
    //! TEMP "FETCH" FROM mockDB
    const filteredData = topics.filter(
      (topic) => topic.topic_id === topicIdUrl
    );
    if (filteredData?.length <= 0) {
      return null; // return null if no match found
    }
    return filteredData[0];
  }

  static async getTopicData1(topicIdUrl) {
    //! THE ACTUAL FETCH FROM API
    if (!topicIdUrl) return;

    try {
      const response = await axiosCustomized.get(`/topic/${topicIdUrl}`);

      return response.data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  static async getLessonsByTopic(topicID) {
    //TODO fetch code

    const filteredData = topics.filter((topic) => topic.topic_id === topicID);
    if (filteredData?.length <= 0) {
      return null; // return null if no match found
    }
    return filteredData[0].lessons;
  }

  static async gelAllTags() {
    try {
      const response = await axiosCustomized.get(`/hashTags`);

      return response.data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
}

export default TopicsAPI;
