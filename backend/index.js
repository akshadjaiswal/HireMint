import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import UserRoute from "./routes/user.route.js";
import CompanyRoute from "./routes/company.route.js"
import JobRoute from "./routes/job.route.js"
import ApplicationRoute from "./routes/application.route.js"
const app = express()
dotenv.config({})

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}

const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));

//api's
app.use("/api/v1/user", UserRoute)
app.use("/api/v1/company", CompanyRoute)
app.use("/api/v1/job", JobRoute)
app.use("/api/v1/application", ApplicationRoute)

// DB connection before server initialization
connectDB().then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
})