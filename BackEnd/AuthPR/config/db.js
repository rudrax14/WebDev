const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.DB_URL || 'mongodb://127.0.0.1:27017/AuthApp';

const dbConnect = () => {
    mongoose.connect(uri,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
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