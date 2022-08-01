const express= require("express")
const router= express.Router()
const UserController= require("../controller/userController")
router.post("/user",UserController.createUser)
router.get("/citydetail",UserController.citydeatail)

module.exports=router