import mongoose from "mongoose";
import Author from "../models/Author.mongodb.js";
import dotenv from "dotenv"

dotenv.config()

const authors = [
{ name: "Paviter Jeet", email: "paviter@example.com" },
{ name: "Simran Kaur", email: "simran@example.com" },
{ name: "Raj Singh", email: "raj@example.com" }
];


(async()=>{
        await mongoose.connect("mongodb+srv://paviterjeetkaur:SPrF9jAthPLMaMn6@database.tk7kr.mongodb.net/?retryWrites=true&w=majority&appName=mini_blog").then(()=>{
            console.log("Database Connected");
        }).catch(err => console.error(err))


    const auth = await Author.create(authors)

    console.log(auth)

})()
