const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adarsh00761:8TPPhxhZD9sHLDC3@cluster0.i7f8uc5.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database connection successful');
}).catch((error) => {
  console.error('Database connection error:', error);
});
