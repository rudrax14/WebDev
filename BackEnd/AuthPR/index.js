const express = require('express');
const app = express()


require('dotenv').config()
// console.log(process.env.PORT)

app.use(express.json())

const PORT = process.env.PORT || 5000;

const dbConnection = require('./config/db')
dbConnection();

// Mount
const auth = require('./routes/user')
app.use('/api/v1', auth)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
