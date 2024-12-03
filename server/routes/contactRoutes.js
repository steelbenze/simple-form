const express = require('express');
const { connectDB } = require('../config/db');

const router = express.Router();
const db = connectDB();

router.post('/', (req, res) => {
  const { firstName, lastName, email, phone, gender } = req.body;

  if (!firstName || !lastName || !email || !phone || !gender) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO contacts (firstName, lastName, email, phone, gender) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, phone, gender], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to save contact data', error: err });
    }
    res.status(201).json({ message: 'Contact saved successfully', id: result.insertId });
  });
});

module.exports = router;
