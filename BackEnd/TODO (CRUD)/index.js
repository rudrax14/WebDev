const express = require("express");
const app = express();

// db connection
const dbConnection = require("./src/db/dbConnection");

dbConnection();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});