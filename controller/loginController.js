const User = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const util = require('util')
const asyncErrorHandler =  require('../utils/asyncErrorHandler')


exports.login=asyncErrorHandler(async(req,res,next)=>{
   const data = req.body
   const user = await User.findOne({email:data.email}).where('status').equals('active').select('+password')
  
   if(!user || !(await bcrypt.compare(data.password,user.password))){
    console.log('error')
    res.status(404).json({
        status:'fail',
        message:'wrong email or password'
            })
    }
    const Nuser = await User.findOne({email:data.email}) 
    if(Nuser && (await bcrypt.compare(data.password,user.password))){
      const id = Nuser.id
        console.log(id)
        const token = await jwt.sign({id},process.env.SCRETE_STR)
        res.json({
            status:'success',
            token,
            data:Nuser
        })
    }
   
 
})

exports.forgotPassword=asyncErrorHandler(async(req,res,next)=>{
    const data = req.body.email
   const user = await User.find({email:data}).where('status').equals('active')
   if(user){
    const id = user._id
    const token = await util.promisify(jwt.sign)({id},process.env.SCRETE_STR)
    res.status(200).json({
        status:'success',
        token,
        data:user
    })
   }
   if(!user){
    res.status(404).json({
        status:'fail',
        message: 'no user found'
    })
   }
   
})


exports.resetPassword= asyncErrorHandler(async(req,res,next)=>{
    const testToken = req.headers.authorization
    let token
    if(testToken && testToken.startsWith('bearer')){
        token = testToken.spilt(' ')[1]
    }
    if(testToken && !(testToken.startsWith('bearer'))){
        token = testToken
    }
    const id = req.params.id
    const data = req.body
    const decodetoken = await jwt.verify(token,process.env.SCRETE_STR)
    if(decodetoken && (data.password === data.confirmpassword)){
        password = await bcrypt.hash(data.password,12)
       const result = await User.findByIdAndUpdate(id,{$set:{password:password}})
        res.status(200).json({
            status:'success',
            data:result
        })
    }
    if(!decodetoken || !(data.password === data.confirmpassword)){
        res.status(404).json({
            status:'fail'
        })
    }

})