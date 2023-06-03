
const { Schema, default: mongoose } = require('mongoose');

const gradeSchema = new Schema({
  grade: {
    type: String,
    required: true,
    unique: true,
  }
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = { Grade };
