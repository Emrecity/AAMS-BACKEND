const Audit = require('../models/auditModel')
const asyncErrorHandler =  require('../utils/asyncErrorHandler')

exports.getAllAsset = asyncErrorHandler(async (req,res,next)=>{
    const data = await Audit.find()
    res.json({
      status:'success',
      data
    })
})

exports.getOneAsset = asyncErrorHandler(async (req,res,next)=>{
    const data = req.params.id
    const audit = await Audit.findById(data)
    res.json({
      status:'success',
      data:audit
    })
})

exports.createAsset = asyncErrorHandler(async (req,res,next)=>{
    const data = req.body
    const newDepartment = await Audit.create(data)
    res.json({
      status:'success',
      data:newDepartment
    })
})

exports.updateAsset = asyncErrorHandler(async (req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const newDepartment = await Audit.updateOne({_id:id},{$set:data},{new:true})
    res.json({
      status:'success',
      data:newDepartment
    })
})

exports.deleteAsset = asyncErrorHandler(async (req,res,next)=>{
    const id = req.params.id
    const data = await Audit.deleteOne({_id:id})
    res.json({
      status:'success',
      data
    })
})