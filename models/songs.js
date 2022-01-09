//import mongoose from "mongoose"
const mongoose=require("mongoose")
const songsScheema=mongoose.Schema({

    title:{
        type:String,
        default:""
    },
    message:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    displayName:{
        type:String,
        default:""
    },
    tags:[String],   
    media:String,
 cover:String,
  coverFormat:String,
   artist:String,
     
   
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})
const Songs=mongoose.model("Songs",songsScheema)
//export default Songs
module.exports =Songs