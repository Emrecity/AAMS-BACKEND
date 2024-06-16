const Venue = require('../models/venuModel')
const asyncErrorHandler = require('../utils/asyncErrorHandler')

exports.getAllVenue = asyncErrorHandler( async (req,res,next)=>{
    const data = await Venue.find()
    res.json({
      status:'success',
      data
    })
})

exports.createVenue = asyncErrorHandler( async (req,res,next)=>{
    const data = req.body
    const newVenue = await Venue.create(data)
    res.json({
      status:'success',
      data:newVenue
    })
})

exports.updateVenue = asyncErrorHandler( async (req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const newVenue = await Venue.updateOne({_id:id},{$set:data},{new:true})
    res.json({
      status:'success',
      data:newVenue
    })
})

exports.deleteVenue = asyncErrorHandler( async (req,res,next)=>{
    const id = req.params.id
    const newVenue = await Venue.deleteOne({_id:id})
    res.json({
      status:'success',
      data:newVenue
    })
})

exports.getOneVenue = asyncErrorHandler( async (req,res,next)=>{
  const id = req.params.id
  const data = await Venue.findById(id)
  res.json({
    status:'success',
    data
  })
})

exports.updateVenueRoom = asyncErrorHandler( async (req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const newVenue = await Venue.updateOne({"rooms._id":id},{$set:{"rooms.$.name":data.name,"rooms.$.position":data.position}},{new:true})
    res.json({
      status:'success',
      data:newVenue
    })
})

exports.createVenueRoom = asyncErrorHandler( async (req,res,next)=>{
    const id = req.params.id
    const data = req.body
    const newVenue = await Venue.updateOne({_id:id},{$addToSet:{rooms:data}})
    res.json({
      status:'success',
      data:newVenue
    })
})

exports.deleteVenueRoom = asyncErrorHandler(async(req,res,next)=>{
    const id = req.params.id
    const request = await Venue.updateOne({'rooms._id':id},{$pull:{rooms:{_id:id}}})
    res.status(201).json({
        status: 'success',
        data: request
    })
})
