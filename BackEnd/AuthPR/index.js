const express = require('express');
const app = express()


require('dotenv').config()
// console.log(process.env.PORT)

const PORT = process.env.PORT || 5000;

const dbConnection = require('./config/db')
dbConnection();


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
