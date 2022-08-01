const express = require("express")
const mongoose= require("mongoose")
const router= require("./router/route")
const multer= require("multer")
const app= express()
app.use(express.json())
app.use(multer().any())
mongoose.connect("mongodb+srv://abhinav7877:abhinavmangal@abhinav.yhc3th4.mongodb.net/group4Database?retryWrites=true&w=majority"

)
.then(()=> console.log("mongoose connected"))
.catch(err=>console.log(err))
app.use("/",router)
app.listen(process.env.port || 3001, function(){
    console.log("express un on this port"+(process.env.port || 3001))
})