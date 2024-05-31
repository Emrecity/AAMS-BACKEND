const User = require('../models/authModel')

exports.getUser = async(req,res)=>{
    const id = req.params.id
    try{
        if(id){
            const user = await User.findById(id)
            res.status(200).json({
                status:'success',
                data:user
            })
        }
    }catch(err){
        console.log(err)
    }

}

exports.getAllUsers = async(req,res)=>{
    try{
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
      
    }catch(err){
        console.log(err.message)
    }

}

exports.createUser = async(req,res)=>{
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
 
}

exports.updateUser = async (req,res)=>{
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
}

exports.deleteUser = async(req,res)=>{
    const id = req.params.id
    await User.findByIdAndUpdate(id,{$set:{status:'inactive'}})
    res.json({
        status:'success',
        message:`${id} has been deleted successfully`
    })
}

