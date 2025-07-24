import e from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = e();
dotenv.config()
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected");
}).catch(err => console.error(err))




app.get('/',(req, res)=>{
    res.send("<h1> its Working</h1>")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})