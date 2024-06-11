const express = require("express")
const monogoos = require("mongoose")
const cors = require("cors")
// const students = require("./models/student")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("HELLO")
})

app.post("/add",(req,res)=>{
    res.send("Add page")
})

app.post("/view",(req,res)=>{
    res.send("View Page")
})

app.listen(8080,()=>{
    console.log("Server Started")
})