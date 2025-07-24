import e from "express";

const app = e();

app.get('/',(req, res)=>{
    res.send("<h1> its Working</h1>")
})

app.listen("3000",()=>{
    console.log(`http://localhost:3000`)
})