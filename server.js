const express = require('express');
const cors = require('cors');
require('dotenv').config();

// set up the app
const app = express();
const listingsRoutes = require('./routes/listings');

// allows cross-origin requesting
app.use(cors());
// convert to .json since POST uses .json
app.use(express.json());
// serve from public/index.html (looks for index.html by default)
app.use(express.static('public'));
// GET and POST to /listings
app.use('/listings', listingsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});