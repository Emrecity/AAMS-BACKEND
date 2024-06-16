const mongoose = require('mongoose')


const RoomSchema = new mongoose.Schema({
    name:String,
    position:String
})

const VenueSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    initials:{
        type:String,
        required:true,
        unique:true
    },
    rooms:[RoomSchema]
})

const Venue = mongoose.model('venue',VenueSchema)

module.exports = Venue