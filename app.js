const express = require("express")
const monogoos = require("mongoose")
const cors = require("cors")

const employees = require("./models/employee")

const {employeeModel} = require("./models/employee")



const app = express()
app.use(cors())
app.use(express.json())

monogoos.connect("mongodb+srv://orwel000:orwel123@cluster0.hyugd.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    // console.log(input)
    let employee =  new employeeModel(input)
    // console.log(employee)
    employee.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    employeeModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("Server Started")
})