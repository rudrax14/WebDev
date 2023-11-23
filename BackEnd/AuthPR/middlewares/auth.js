const jwt = require("jsonwebtoken")
require("dotenv").config();

//auth,isStudent,isAdmin

exports.auth = async (req, res, next) => {
    try {
        // extract jwt token 
        const token = req.body.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missisng",
            })
        }

        // verify token
        try {
            const payload = jwt.decode(token, process.env.JWT_SECRET);
            console.log("DECODE", payload)

            // user mai store karra diya
            req.user = decode; // payload decode hota hai 
            console.log("REQ . USER", req.user)
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid",
            })
        }
        // goto next middleware
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Auth error",
        })
    }
};

// isStudetn Middleware
exports.isStudent = async (req, res, next) => {
    try {
        if (req.user.role != "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a student route",
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Role is not Matching",
        })
    }
};
// isAdmin
exports.isAdmin = async (req, res, next) => {
    try {
        if (req.user.role != "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a student route",
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Role is not Matching",
        })
    }
};