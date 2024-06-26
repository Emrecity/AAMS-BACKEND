const User = require('../models/authModel')
const asyncErrorHandler =  require('../utils/asyncErrorHandler')

exports.createStaff = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const request = await User.updateOne({_id:id},{$addToSet:{staff:data}})
    res.status(201).json({
        status: 'created',
        data: request
    })

})

exports.updateStaff = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const request = await User.updateOne({'staff._id':id},{$set:{'staff.$.title':data.title,'staff.$.firstname':data.firstname,'staff.$.lastname':data.lastname,'staff.$.othername':data.othername,'staff.$.email':data.email,'staff.$.phone':data.phone,'staff.$.gender':data.gender,'staff.$.office':data.office}})
    res.status(200).json({
        status: 'success',
        data: request
    })
})

exports.deleteStaff = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const request = await User.updateOne({'staff._id':id},{$pull:{staff:{_id:id}}})
    res.status(200).json({
        status: 'ok',
        data: request
    })
})