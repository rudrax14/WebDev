const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.DB_URL;

const dbConnect = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log("DB Connected")
        })
        .catch(err => {
            console.log("OH NO ERROR!!!!")
            console.log(err)
            process.exit(1)
        })
}

module.exports = dbConnect;