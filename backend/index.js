import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
const app = express()
dotenv.config({})

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credential: true
}

const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));

app.get("/home", (req, res) => {
    return res.status(200).json({
        message: "This is from backend",
        success: true
    })
})

connectDB().then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
})