//import PostMessage from "../models/postMessages.js"
const Song =require("../models/songs")

const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");
   const getPosts =async (req,res)=>{
 
    res.status(200).send("WOW")
    
    } 
 
    const createPost =async (req,res)=>{ 
        const post =req.body 
        const newPost=new Song(post)
        try{
           await  newPost.save()
            res.status(200).json(newPost)
        }catch(error){
			console.log(error)
res.status(500).json({message:error.message})

        }
        } 
     
    module.exports = { getPosts ,createPost}
