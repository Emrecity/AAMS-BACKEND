const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const RequestSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    quantity:Number,
    department:String,
    status:{
        type:String,
        enum:['pending','accepted','decline'],
        default:'pending'
    },
    message:{
        type:String,
        default:'no message'
    }
})

const AuditSchema = new mongoose.Schema({
    dateOfPurchase:String,
    nameAndDescription:{
        type:String,
        maxLength:300
    },
    quantity:Number,
    department:String,
    finance:String,
    identificationId:{
        type: String,
        
    },
    user:String,
    location:String,
    remarks:{
        type:String,
        enum:['healthy','under repair','not functional']
    }
})

const AuthUserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        maxLength:30
    },
    middlename:{
        type:String,
        maxLength:30
    },
    lastname:{
        type:String,
        require:true,
        maxLength:30
    },
    gender:{
        type:String,
        enum:['male','female']
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    role:{
        type:String,
        require:true,
        enum:['hod','estate','admin']
    },
    phone:{
        type:String,
        require:true,
        unique:true
    },
     department:{
        type:String,
      
     },
     status:{
        type:String,
        enum:['active','inactive'],
        default:'active'
     },
     password:{
        type:String,
        require:true,
        select:false
     },
     confirmpassword:{
        type:String,
        select:false,
        validate:{
            validator:function(val){
                return val == this.password
            }
        }
        
     },
     request:[RequestSchema],
     audit:[AuditSchema]   
})

AuthUserSchema.pre('save',async function(next){
   this.password = await bcrypt.hash(this.password, 12)
   this.confirmpassword = undefined
   next()
})

const User = mongoose.model('user',AuthUserSchema)

module.exports = User