const UsersDAO = require("../models/UsersDAO");
const { ObjectId } = require("mongodb");
const { RegisterValidation } = require("../validations/UsersValidations");

module.exports = class UserController {

  static async GetAllUsers(req, res) {
    try {
      const usersArr = await UsersDAO.getAllUsers();
      res.json(usersArr);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async GetAllAdmins(req, res) {
    try {
      const adminsArr = await UsersDAO.getAllAdmins();
      res.json(adminsArr);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async GetUserByUId(req, res) {
    try {
      const user = await UsersDAO.getUserByUId(req.params.id);
      res.json(user);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
  static async CreateUser(req, res) {
    try {
      const valid = RegisterValidation(req.body);
      if (!valid) {
        return res.status(400).json({
          success: false,
          message: "invalid request body",
        });
      }
      const user = await UsersDAO.createUser(req.body);
      res.json(user);
    } catch (e) {
      console.log(`Error in ${e}`);
      return res.status(500).json({
        success: false,
        message: "unknown error",
      });
    }
  }
};




