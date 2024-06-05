const Department = require('../models/departmentModel')
const asyncErrorHandler = require('../utils/asyncErrorHandler')

exports.getAllDepartment = asyncErrorHandler( async (req,res,next)=>{
    const data = await Department.find()
    res.json({
      status:'success',
      data
    })
})

exports.getOneDepartment = asyncErrorHandler(async (req,res,next)=>{
    const data = req.params.id
    const newDepartment = await Department.find({_id:data})
    res.json({
      status:'success',
      data:newDepartment
    })
})

exports.createDepartment = asyncErrorHandler( async (req,res,next)=>{
    const data = req.body
    const newDepartment = await Department.create(data)
    res.json({
      status:'success',
      data:newDepartment
    })
})

exports.updateDepartment = asyncErrorHandler( async (req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const newDepartment = await Department.updateOne({_id:id},{$set:data},{new:true})
    res.json({
      status:'success',
      data:newDepartment
    })
})

exports.deleteDepartment = asyncErrorHandler( async (req,res,next)=>{
    const id = req.params.id
    const data = await Department.deleteOne({_id:id})
    res.json({
      status:'success',
      data
    })
})