const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    try {
        // const token = req.body.token; // Get token from body
        //const token = req.headers.authorization.split(' ')[1]; // Get token from header/bearer token



        const token = req.header("Authorization").replace("Bearer ", "") || req.body.token || req.cookies.token
        console.log("auth-token", token);

        // Check if token is missing
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token Missing',
            });
        }

        // Verify the token/ Check if token is valid
        try {
            const decode = jwt.verify(token, 'Aloo Lee Loo');
            console.log('decode', decode);
            req.user = decode;
            next(); // Call next middleware
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            success: false,
            message: "Something went wrong while verifying token"
        });
    }
};


exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protect route for students you can not access it"
            })
        }
        next();
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "User Role is not Matching"
        })
    }
}

exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protect route for Admins,you can not access it"
            })
        }
        next();
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "User Role is not Matching"
        })
    }
}