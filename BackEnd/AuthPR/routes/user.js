const express = require('express');
const router = express.Router();

// Import Controller
const { signup, login, deleteUser } = require('../controllers/auth');
const { auth, isStudent, isAdmin } = require('../middlewares/auth');


// Mapping Create

router.post('/signup', signup);
router.post('/login', login);
router.delete('/delete', deleteUser);


// Auth for protected routes
//testing routes
router.get('/test', auth, (req,res)=> {
    res.json({
        success: True,
        message: "Welcome to the TEST",
    })
});

router.get('/student', auth, isStudent, (req,res)=> {
    res.json({
        success: True,
        message: "Welcome to the Student",
    })
});
router.get('/admin', auth, isAdmin, (req,res)=> {
    res.json({
        success: True,
        message: "Welcome to the Admin",
    })
});


// Export Controller    
module.exports = router;