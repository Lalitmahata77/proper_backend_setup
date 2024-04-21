import dotenv from "dotenv"
import { dbConnect } from "./db/dbConnect.js"
import app from "./app.js";
dotenv.config({
    path: "./.env"
})
const Port = process.env.PORT || 4000
dbConnect().then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log("error",err);
})

app.listen(Port,()=>{
    console.log(`server is listening on port :${Port}`);
})