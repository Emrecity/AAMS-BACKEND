const Department = require('../models/departmentModel')

exports.getAllDepartment = async (req,res)=>{
    const data = await Department.find()
    res.json({
      status:'success',
      data
    })
}

exports.getOneDepartment = async (req,res)=>{
    const data = req.params.id
    const newDepartment = await Department.find({_id:data})
    res.json({
      status:'success',
      data:newDepartment
    })
}

exports.createDepartment = async (req,res)=>{
    const data = req.body
    const newDepartment = await Department.create(data)
    res.json({
      status:'success',
      data:newDepartment
    })
}

exports.updateDepartment = async (req,res)=>{
    const id = req.params.id
    const data = req.body
    const newDepartment = await Department.updateOne({_id:id},{$set:data},{new:true})
    res.json({
      status:'success',
      data:newDepartment
    })
}

exports.deleteDepartment = async (req,res)=>{
    const id = req.params.id
    const data = await Department.deleteOne({_id:id})
    res.json({
      status:'success',
      data
    })
}