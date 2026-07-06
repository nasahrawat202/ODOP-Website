require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db'); // MongoDB connection setup
const contactRoutes = require('./routes/contactRoutes'); // Contact route only

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB(); // Connect to MongoDB

// Routes
app.use('/api/contacts', contactRoutes); // Only contact route needed

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}...`);
});
