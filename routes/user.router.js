const router = require("express").Router()

router.get("/get-user",(req,res)=>{
    res.json({
        success : true,
        message : "Response from get user"
    })
})
module.exports = router