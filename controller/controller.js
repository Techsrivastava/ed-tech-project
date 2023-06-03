const { Admin } = require("../model/model");
const AdminServices = require("../services/services");

exports.register = async (req, res, next) => {
  try {
    console.log("----req body----", req.body);
    const { username, password } = req.body;
    const duplicate = await AdminServices.getAdminByUsername(username);
    if (duplicate) {
      throw new Error(`Username ${username} is already registered`);
    }
    const response = await AdminServices.registerAdmin(username, password);

    res.json({ status: true, success: 'Admin registered successfully' });
  } catch (err) {
    console.log("---> err -->", err);
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new Error('Parameters are not correct');
    }

    let admin = await AdminServices.checkAdmin(username);
    if (!admin) {
      throw new Error('Admin does not exist');
    }

    const isPasswordCorrect = await admin.comparePassword(password);

    if (isPasswordCorrect === false) {
      throw new Error('Username or Password does not match');
    }

    // Creating Token
    let tokenData = { _id: admin._id, username: admin.username };

    const token = await AdminServices.generateAccessToken(tokenData, "secret", "1h");

    res.status(200).json({ status: true, success: "sendData", token: token });
  } catch (error) {
    console.log(error, 'err---->');
    next(error);
  }
};

exports.getAllAdmins = async (req, res, next) => {
  try {
    const admins = await AdminServices.getAllAdmins();
    res.status(200).json({ success: true, data: admins });
  } catch (error) {
    next(error);
  }
};
