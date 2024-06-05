const User = require('../models/authModel')
const asyncErrorHandler =  require('../utils/asyncErrorHandler')

exports.createRequest = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const request = await User.updateOne({_id:id},{$addToSet:{request:data}})
    res.status(201).json({
        status: 'created',
        data: request
    })

})

exports.updateRequest = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const request = await User.updateOne({'request._id':id},{$set:{"request.$.name":data.name,"request.$.quantity":data.quantity,"request.$.description":data.description,"request.$.status":data.status,"request.$.message":data.message}})
    if (request){
        res.status(200).json({
            status:'success',
            message:'processing updates'
        })
    }
    if (!request){
        res.status(404).json({
            status:'fail',
            message:'not found'
        })
    }
   
})

exports.deleteRequest = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const request = await User.updateOne({'request._id':id},{$pull:{request:{_id:id}}})
    res.status(201).json({
        status: 'created',
        data: request
    })
})