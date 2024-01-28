// const express = require('express') // normal
import express from 'express'; //
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/jokes', (req, res) => {
    const jokesArray = [
        {
            id: 1,
            title: "The Mathematician's Joke",
            content: "Why was the equal sign so humble? It knew it wasn't less than or greater than anyone else."
        },
        {
            id: 2,
            title: "Programming Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 3,
            title: "Physics Joke",
            content: "I told my computer I needed a break, and now it won't stop sending me vacation ads."
        },
        {
            id: 4,
            title: "Dad Joke",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 5,
            title: "Coffee Joke",
            content: "How do you organize a fantastic space party? You planet."
        }
    ];
    res.send(jokesArray);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})