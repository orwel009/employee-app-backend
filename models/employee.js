const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "empId":{type:String,require:true},
        "empName":{type:String,require:true},
        "designation":{type:String,require:true},
        "Salary":{type:String,require:true}
    }
)

let employeeModel = mongoose.model("employees",schema)
module.exports={employeeModel}