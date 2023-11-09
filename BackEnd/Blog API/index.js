const express = require('express')
const app = express()
const PORT = 5000

//middleware to parse json request body // upar rahega 
app.use(express.json());


const blog = require('./routes/blogs');

// mount 
app.use("/api/v1", blog);



//connect to the database
const dbConnect = require("./config/database");
dbConnect();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})