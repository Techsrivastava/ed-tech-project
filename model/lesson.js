const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  videoType: {
    type: String,
    enum: ['upload', 'link', 'YouTube'],
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);
