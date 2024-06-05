const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    initials:{
        type:String,
        required:true,
        unique:true
    }
  
})

const Department = mongoose.model('department',departmentSchema)

module.exports = Department