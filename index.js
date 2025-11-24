const express = require('express')
const mongoose = require('mongoose')
const app = express()
console.log("server code")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req, res)=>{
    res.json({message:"ok"})
})
app.listen(5565,()=>{
    console.log("Server started");
    
})