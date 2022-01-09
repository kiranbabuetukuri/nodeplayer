const express=require('express')
//import {getPosts } from "../controllers/posts.js"
const cp=require("../controllers/posts")
const ExpressGraphQL = require("express-graphql").graphqlHTTP;
const schema =require("../controllers/schema/resolve-song")
const router=express.Router()
router.get('/', ExpressGraphQL({
    schema: schema,
    graphiql: true
}))

 
router.post('/', ExpressGraphQL({
    schema: schema,
    graphiql: true
}))
 router.post('/add',cp.createPost)
// router.patch('/:id', updatePost)
// router.patch('/:id/likePost', likePost)
// router.delete('/:id', deletePost)
 

module.exports=router