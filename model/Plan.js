const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  category: { type: String, required: true },
  planName: { type: String, required: true },
  price: { type: String, required: true },
  timeLimit: { type: String, required: true },
  access: { type: String, required: true }
});

module.exports = mongoose.model('Plan', planSchema);
