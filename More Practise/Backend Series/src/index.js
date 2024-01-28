// require('dotenv').config({ path: './.env' })  it will not work 

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
});

connectDB()



// import express from "express";
// const app = express();

// Second Way
//  Just for demo purpose

// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("DB Connected");

//         app.on("error", (error) => {
//             console.error("ERROR: ", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Listening on PORT: ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()

