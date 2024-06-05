const User = require('../models/authModel')
const asyncErrorHandler = require('../utils/asyncErrorHandler')

exports.getUser = asyncErrorHandler( async(req,res,next)=>{
    const id = req.params.id
        if(id){
            const user = await User.findById(id)
            res.status(200).json({
                status:'success',
                data:user
            })
        }

})

exports.getAllUsers = asyncErrorHandler( async(req,res,next)=>{

        const data = await User.find().where('status').equals('active')
        if(data || data != ''){
         res.status(200).json({
             status:'success',
             data
     
         })
         }
         if(!data){
            res.json({
                status:'success',
                message:'no user'
            })
         }
      
})

exports.createUser = asyncErrorHandler( async(req,res,next)=>{
    const data = req.body
    const newUser = await User.create(data)
    if (newUser){
        res.status(201).json({
            status:'success'
        })
    }
    if(!newUser){
        res.status(404).json({
            status: 'fail'
        })
    }
 
})

exports.updateUser = asyncErrorHandler( async (req,res,next)=>{
    const id = req.params.id
    const data = req.body
    if(id != ''){
    const updateUser = await User.updateOne({_id:id},data,{new:true})
    res.status(200).json({
        status:'success',
        message:'updated successfully',
        data:updateUser
    })

}
})

exports.deleteUser = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    await User.findByIdAndUpdate(id,{$set:{status:'inactive'}})
    res.json({
        status:'success',
        message:`${id} has been deleted successfully`
    })
})

