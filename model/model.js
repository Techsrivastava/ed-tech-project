const { db } = require('./user.model');
const bcrypt = require('bcrypt');
const { Schema } = require('mongoose');

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash the password before saving
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);

    this.password = hash;
    next();
  } catch (err) {
    return next(err);
  }
});

// Compare password
adminSchema.methods.comparePassword = async function (adminPassword) {
  try {
    return await bcrypt.compare(adminPassword, this.password);
  } catch (error) {
    throw error;
  }
};

const Admin = db.model('Admin', adminSchema);

module.exports = { Admin };
