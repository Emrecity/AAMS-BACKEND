const User = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const util = require('util')
const asyncErrorHandler =  require('../utils/asyncErrorHandler')



exports.login=asyncErrorHandler(async(req,res,next)=>{
   const data = req.body
   const user = await User.findOne({email:data.email}).where('status').equals('active').select('+password')
  
   if(!user ){
    res.status(404).json({
        status:'fail',
        message:'User not found'
            })
    }
    if(user && !(await bcrypt.compare(data.password,user.password))){
        res.status(404).json({
            status:'fail',
            message:'Wrong Password'
        })
    }
    const Nuser = await User.findOne({email:data.email}) 
    if(Nuser && (await bcrypt.compare(data.password,user.password))){
      const id = Nuser.id
        const token = await jwt.sign({id},process.env.SCRETE_STR)
        res.json({
            status:'success',
            token,
            data:Nuser
        })
    }
   
 
})

exports.forgotPassword=asyncErrorHandler(async(req,res,next)=>{
    const email = req.body.email
     const user = await User.findOne({email}).where('status').equals('active')
   if(!user ){
        res.status(404).json({
            status:'fail',
            message:'User not found'
                })
    }
   if(user){
    const id = user._id
    const token = await util.promisify(jwt.sign)({id},process.env.SCRETE_STR)
    res.status(200).json({
        status:'success',
        token,
        id
    })
    }

})

exports.resetPassword= asyncErrorHandler(async(req,res,next)=>{
   const token = req.headers.authorization
   const data = req.body
   const decodeToken = token.split(" ")[1]
   if(decodeToken){
      const verifyToken = jwt.verify(decodeToken,process.env.SCRETE_STR)
      if(verifyToken && (data.password == data.confirmpassword)){
        const id = verifyToken.id
        const password = await bcrypt.hash(data.password,12)
        const response = await User.updateOne({_id:id},{$set:{password:password}})
        if(!response){
            res.status(400).json({
                status:'fail',
                message:'Update fail'
            })
        }
        if(response){
            res.status(200).json({
                status:'success',
                message:'Update successful'
            })
        }
      }
   }
})