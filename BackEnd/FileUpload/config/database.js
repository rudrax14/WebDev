const mongoose = require('mongoose');

require('dotenv').config();
const URL = process.env.DATABASE_URL
exports.connect = () => {
    mongoose.connect(URL, {
    })
        .then(console.log("DB Connection Successful"))
        .catch((error) => {
            console.log("DB Connection Issues");
            console.error(error);
            process.exit(1);
        });
};