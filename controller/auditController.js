const Audit = require('../models/auditModel')

exports.getAllAsset = async (req,res)=>{
    const data = await Audit.find()
    res.json({
      status:'success',
      data
    })
}

exports.getOneAsset = async (req,res)=>{
    const data = req.params.id
    const audit = await Audit.findById(data)
    res.json({
      status:'success',
      data:audit
    })
}

exports.createAsset = async (req,res)=>{
    const data = req.body
    try{
    const newDepartment = await Audit.create(data)
    res.json({
      status:'success',
      data:newDepartment
    })
  }catch(err){
    res.json({
      status:'fail',
      message:err.message
    })
  }
}

exports.updateAsset = async (req,res)=>{
    const id = req.params.id
    const data = req.body
    const newDepartment = await Audit.updateOne({_id:id},{$set:data},{new:true})
    res.json({
      status:'success',
      data:newDepartment
    })
}

exports.deleteAsset = async (req,res)=>{
    const id = req.params.id
    const data = await Audit.deleteOne({_id:id})
    res.json({
      status:'success',
      data
    })
}