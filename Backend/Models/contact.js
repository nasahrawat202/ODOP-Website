const mongoose = require('mongoose');

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Contact model from the schema
const Contact = mongoose.model('Contact', contactSchema);

// Export the model so it can be used in other parts of the application
module.exports = Contact;
