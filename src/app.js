import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true,
limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//import routes
import userRoute from "./controller/user.controller.js"
app.use("/api/user/", userRoute)



export default app