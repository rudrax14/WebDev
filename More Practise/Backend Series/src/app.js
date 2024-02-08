import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
// for cors purposes
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// for check and limit json requests
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

// for cookieParser purposes
app.use(cookieParser())

export { app }