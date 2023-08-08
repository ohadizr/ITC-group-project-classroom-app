const { ObjectId } = require("mongodb");

let collection_questions;
let collection_users;

module.exports = class UsersDAO {
  static async injectDB(connection) {
    if (!connection) return;
    try {
      collection_users = await connection.collection("users");
      collection_questions = await connection.collection("questions");

    } catch (e) {
      console.log(`Could not establish connection to users collection ${e}`);
    }
  }

  static async getAllUsers() {
    if (! await collection_users){ 
      console.log("No collection_users");
      return;
    }
    try {
      let users = await collection_users.find({}).toArray();
      return users;

    } catch (e) {
      console.log(`Could not establish connection to users collection ${e}`);
    }
};
static async getAllAdmins() {
  if (! await collection_users){ 
    console.log("No collection_users");
    return;
  }
  try {
    let admins = await collection_users.find({is_admin:true}).toArray();
    return admins;

  }
  catch (e) {
    console.log(`Could not establish connection to users collection ${e}`);
  }
};
static async getUserByUId(id) {
  if (! await collection_users){ 
    console.log("No collection_users");
    return;
  }
  try {
    let user = await collection_users.findOne({ uid: id });
    return user;

  }
  catch (e) {
    console.log(`Could not establish connection to users collection ${e}`);
  }
};
static async createUser(user) {
  if (! await collection_users){ 
    console.log("No collection_users");
    return;
  }
  try {
    let newUser = await collection_users.insertOne(user);
    return newUser;

  }
  catch (e) {
    console.log(`Could not establish connection to users collection ${e}`);
  }
}
static async getAllQuestionsByUserId(id) {
  console.log({id});
  try {
    const questions = await collection_questions
      .find({ user_id: id })
      .toArray();
    return questions;
  }
  catch (e) {
    console.log(`Error in ${e}`);
    return res.status(500).json({
      success: false,
      message: "unknown error",
    });
  }
}
static async getAllQuestions() {
  try {
    const questions = await collection_questions.find().toArray();
    return questions;
  } catch (e) {
    console.log(`Error in ${e}`);
    return res.status(500).json({
      success: false,
      message: "unknown error",
    });
  }
}
static async createQuestion(q_title, q_content, user_id, course_google_no) {
  try {
    const newQuestion = await collection_questions.insertOne({
      q_title: q_title,
      q_content: q_content,
      user_id: user_id,
      course_google_no: course_google_no,
      date: new Date(),
    });
    return newQuestion;
  } catch (e) {
    console.log(`Error in ${e}`);
    return res.status(500).json({
      success: false,
      message: "unknown error",
    });
  }
}
static async deleteQuestion(id) {
  try {
    const deleteQuestion = await collection_questions.deleteOne({
      _id: new ObjectId(id),
    });
    return deleteQuestion;
  } catch (e) {
    console.log(`Error in ${e}`);
    return res.status(500).json({
      success: false,
      message: "unknown error",
    });
  }
}

}




