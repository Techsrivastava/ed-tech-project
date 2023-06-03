const { Admin } = require('../model/model');
const jwt = require('jsonwebtoken');

class AdminServices {
  static async registerAdmin(username, password) {
    try {
      console.log('-----username ---- password------', username, password);

      const createAdmin = await Admin.create({ username, password });
      return createAdmin;
    } catch (error) {
      throw error;
    }
  }

  static async getAdminByUsername(username) {
    try {
      return await Admin.findOne({ username });
    } catch (err) {
      console.log(err);
    }
  }

  static async checkAdmin(username) {
    try {
      return await Admin.findOne({ username });
    } catch (error) {
      throw error;
    }
  }

  static async generateAccessToken(tokenData, JWTSecret_Key, JWT_EXPIRE) {
    return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
  }

  static async getAllAdmins() {
    try {
      const admins = await Admin.find({});
      return admins;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AdminServices;
