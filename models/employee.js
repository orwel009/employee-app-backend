const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "rollNo":String,
        "admNo":String,
        "college":String
    }
)

let employeeModel = mongoose.Model("employees",schema)
module.exports={employeeModel}