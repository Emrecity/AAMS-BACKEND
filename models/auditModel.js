const mongoose = require('mongoose')

const assetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    dateOfPurchase:{
        type:String,
        required:true
    },
    identificationNumber:{
        type:String,
        required:true,
        unique:true
    },
    department:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true   
    },
  
})

const Audit = mongoose.model('asset',assetSchema)

module.exports = Audit