const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); // Import the Contact model

// Add a new contact message (POST)
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Create a new contact message
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Form submitted successfully.' });  // Send success message as response
  } catch (err) {
    console.error('❌ Error saving contact message:', err.message);
    res.status(500).json({ message: 'Failed to submit form.' });
  }
});

// Retrieve all contact messages (GET)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();  // Fetch all contact messages from the database
    res.status(200).json(contacts); // Send the fetched data as a JSON response
  } catch (err) {
    console.error('❌ Error fetching contact submissions:', err.message);
    res.status(500).json({ message: 'Failed to fetch contact submissions.' });
  }
});

// Optionally: Retrieve a single contact message by ID (GET)
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const contact = await Contact.findById(id);  // Fetch a contact message by its ID
    if (!contact) {
      return res.status(404).json({ message: 'Contact message not found.' });
    }
    res.status(200).json(contact);  // Send the found contact message as a JSON response
  } catch (err) {
    console.error('❌ Error fetching contact message:', err.message);
    res.status(500).json({ message: 'Failed to fetch contact message.' });
  }
});

module.exports = router;
