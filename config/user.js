const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // to avoid deprecation warning for ensureIndex
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define the schema
const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // Ensure usernames are unique
  },
  password: {
    type: String,
    required: true
  },
});


// Create a model based on the schema
const users = mongoose.model('users', Schema);

// Export the model
module.exports = users;