const express = require('express');
const router = express.Router();

// Import functions from the controller file
const { signup, login } = require('../controllers/authcontroller');

// Routes
router.post('/signup', signup);
router.post('/login', login);

// Export the router
module.exports = router;
