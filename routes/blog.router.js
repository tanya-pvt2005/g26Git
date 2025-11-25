const express = require('express')
const router = express.Router()

router.get('/get-blogs',(req,res)=>{
    res.json({
        success : true,
        message : "Read our latest blogs"
    })
})
module.exports = router

