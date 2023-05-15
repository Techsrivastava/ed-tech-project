const UserModel = require('../model/user.model');
var jwt = require('jsonwebtoken');

class userServices {
  static async registerUser(name, grade, board, email, password) {
    try {
      console.log('-----Email --- Password-----', name, grade, board, email, password);

      const createUser = new UserModel({ name, grade, board, email, password });
      return await createUser.save();
    } catch (err) {
      throw err;
    }
  }

  static async getUserByEmail(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (err) {
      console.log(err);
    }
  }

  static async checkUser(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw error;
    }
  }

  static async generateAccessToken(tokenData, JWTSecret_Key, JWT_EXPIRE) {
    return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
  }

  static async getAllUsers() {
    try {
      const users = await UserModel.find({});
      return users;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = userServices;
