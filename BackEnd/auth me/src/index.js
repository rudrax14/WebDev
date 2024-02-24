const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});


// middleware
app.use(express.json());

// db connection
const dbConnection = require('./db/dbConnection');
dbConnection();

// mounting rote 
const user = require("./routes/User.routes");
app.use("/api/v1", user);

app.listen(5000, (req, res) => {
    console.log('Server is running on port 5000');
});
