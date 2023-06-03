
const { Schema, default: mongoose } = require('mongoose');

const topicSchema = new Schema({
  topic: {
    type: String,
    required: true,
    unique: true,
  }
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = { Topic };
