const { MongoClient } = require('mongodb');
const HashtagDAO = require('./HashtagDAO');
const UsersDAO = require('./UsersDAO');



module.exports.initDB = async function initDB() {
  try {
    const connection = await MongoClient.connect(process.env.MONGODB_URI);
    const db = connection.db(process.env.DB);
    await HashtagDAO.injectDB(db);
    await UsersDAO.injectDB(db);

    console.log('Connection to DB established');
  } catch (error) {
    console.log(error);
    console.log(`DB connection failed ${error}`);
    process.exit(1);
  }
};
