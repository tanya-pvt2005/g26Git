const getUser = require("../controller/user.controller")

const router = require("express").Router()

router.get("/get-user", getUser)
module.exports = router