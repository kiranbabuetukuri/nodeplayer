// import express from "express"
// import cors from "cors"
// import bodyParser from "body-parser"
// import mongoose from "mongoose"
// import postRoutes from './routes/posts.js';

const  express =require("express")
const cors = require( "cors")
const bodyParser= require( "body-parser")
const mongoose =require( "mongoose")
const postRoutes =require( './routes/posts.js');

const app=express()
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
const log=console.log
const CONNECTION_URL="mongodb+srv://admin:password654@users.bvdv6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 //const CONsNECTION_URL="mongodb://127.0.0.1:27017/player"
const PORT=8080// process.env.PORT || 5000

app.use("/posts",postRoutes)
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>log(`Server running on port d ${PORT}`))).catch(error=>{
log ("unable to connect mongodb url"+CONNECTION_URL)
    log(error)
})
