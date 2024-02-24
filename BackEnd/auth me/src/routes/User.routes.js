const express = require('express');
const router = express.Router();


const { register, login } = require('../controllers/Auth.controller');
const { auth, isAdmin, isStudent } = require('../middlewares/Auth.middleware');
const { fetchUsers } = require('../controllers/User.controller');


router.post('/register', register);
router.post('/login', login);


// Testing Route for Middleware
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message: "Test successful"
    })
})


// Protected Route for Student
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Student"
    })
});

// Protected Route for Admin 
router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Protected Route for Admin"
    })
});

// Fetch User Profile
router.route('/profile/student').get(auth, isStudent).get(fetchUsers);
router.route('/profile/admin').get(auth, isAdmin).get(fetchUsers);



module.exports = router;