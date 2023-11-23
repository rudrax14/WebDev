const express = require('express');
const router = express.Router();

// Import Controller
const { signup, login, deleteUser } = require('../controllers/auth');

// Mapping Create

router.post('/signup', signup);
router.post('/login', login);
router.delete('/delete', deleteUser);


// Auth for protected routes



// Export Controller    
module.exports = router;