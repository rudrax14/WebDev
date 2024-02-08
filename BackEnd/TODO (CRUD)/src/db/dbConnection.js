const mongoose = require('mongoose');

// Connect to the database

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todoDB');
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error connecting to the database');
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConnection;