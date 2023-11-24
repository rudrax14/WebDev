// app create 
const express = require('express');
// const cors = require('cors'); // unknown
const app = express();

// dotenv config
require('dotenv').config();

// port find karna hai
const PORT = process.env.PORT || 5000;


// middleware create
app.use(express.json());
// file upload methord // server pe upload karna hai
const fileUpload = require('express-fileupload');
// app.use(fileUpload());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));


// db connect
const db = require('./config/database');
db.connect();


// cloud connect
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();


// api route mouth
const Upload = require("./routes/fileUpload");
app.use("/api/v1/upload", Upload);

// default route
app.get("/", (req, res) => {
    res.send("<h1>HELLO</h1>");
})

// activate server 
app.listen(PORT, () => {
    console.log(`APP IS RUNNING AT ${PORT}`);
})
