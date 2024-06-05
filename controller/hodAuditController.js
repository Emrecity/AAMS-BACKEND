const User = require('../models/authModel')
const asyncErrorHandler =  require('../utils/asyncErrorHandler')

exports.createAudit = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const request = await User.updateOne({_id:id},{$addToSet:{audit:data}})
    res.status(201).json({
        status: 'created',
        data: request
    })

})

exports.updateAudit = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const request = await User.updateOne({'audit._id':id},{$set:{'audit.$.dateOfPurchase':data.dateOfPurchase,'audit.$.nameAndDescription':data.nameAndDescription,'audit.$.quantity':data.quantity,'audit.$.finance':data.finance,'audit.$.identificationId':data.identificationId,'audit.$.user':data.user,'audit.$.location':data.location,'audit.$.remarks':data.remarks}})
    res.status(200).json({
        status: 'success',
        data: request
    })
})

exports.deleteAudit = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const request = await User.updateOne({'audit._id':id},{$pull:{audit:{_id:id}}})
    res.status(201).json({
        status: 'created',
        data: request
    })
})