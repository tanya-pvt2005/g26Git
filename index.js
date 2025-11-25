const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/user.router')
const app = express()
console.log("server code")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://tanyapvt2005_db_user:BzV7o5SJ2V3jmBxC@forevercluster0.c1dsmus.mongodb.net")
.then(()=>console.log("MongoDB connected"))


app.use("/api/users", router)
app.get("/",(req, res)=>{
    res.json({message:"ok"})
})
app.listen(5565,()=>{
    console.log("Server started");
    
})