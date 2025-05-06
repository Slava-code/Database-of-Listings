const express = require('express');
const router = express.Router();
const db = require('../db');

// adding new listing
router.post('/', async (req, res) => {
  // destructure request body (.json) into our fields
  const { title, description, rent, address, num_rooms, contact_info } = req.body;
  try {
    // insert listing into database and report back with id
    const [result] = await db.execute(
      'INSERT INTO listings (title, description, rent, address, num_rooms, contact_info) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description, rent, address, num_rooms, contact_info]
    );
    res.status(201).json({ message: 'Listing created', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// retrieve all listings (in .json)
router.get('/', async (req, res) => {
  try {
    // retrieval by order of creation (newest first)
    const [rows] = await db.query('SELECT * FROM listings ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;