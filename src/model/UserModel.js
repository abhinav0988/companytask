const mongoose= require("mongoose")
const UserSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    City:{
        type: String,
        required:true,
    },
    Salary:{
        type:String,
        required:true
    },
    Mobile:{
        type:String,
        required:true
    },
    ProfilePicture:{
        type:String
    },
}, { timestamps:true})

module.exports=mongoose.model("user",UserSchema)