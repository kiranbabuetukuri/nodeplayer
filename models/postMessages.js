//import mongoose from "mongoose"
const mongoose=require("mongoose")
const postScheema=mongoose.Schema({

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

    fileName:String,
    base64:String,

   
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})
const PostMessage=mongoose.model("PostMessage",postScheema)
//export default PostMessage
module.exports =PostMessage