import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name : String,
    email : {type : String , required : true, unique : true}
},
{timestamps : true})

const Author = mongoose.model("Author",authorSchema)

export default Author
