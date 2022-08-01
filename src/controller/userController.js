const UserModel= require("../model/UserModel")

const createUser= async function(req,res){
    try{
        const data= req.body
        
        
      let {Name,City,Salary,Mobile}= data
        

        if(Object.keys(data).length===0){
            return res.status(400).send({staus:false,msg:"give some data in body"})
        }
        if(!Name){
            return res.status(400).send({staus:false,msg:"please enter name"}) 
        }
        if(!City){
            return res.status(400).send({staus:false,msg:"please enter city"})
        }
        if(!Salary){
            return res.status(400).send({staus:false,msg:"please enter salary"})
        }
        if(!Mobile){
            return res.status(400).send({staus:false,msg:"please enter Mobile number"})
        }
        const User= await UserModel.create(data)
        res.status(201).send({status:true,msg:User})

    }
    catch(error){
       return res.status(500).send({status:false,msg:error})
    }
}

const citydeatail= async function(req,res){
    try{
        const query=req.query
          const  {City}= query
        let city= await UserModel.findOne({City:City}).select({Name:1,Salary:1,Mobile:1})
        return res.status(200).send({status:true,msg:city})
    }

    
    catch(error){
        res.status(500).send({status:false,msg:error})
    }
}
module.exports.createUser=createUser
module.exports.citydeatail=citydeatail