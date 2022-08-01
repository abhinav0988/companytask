const aws= require("aws-sdk")
aws.config.update(
    {
        accessKeyId:"******",
        secretAccessKey:"*****",
        region:"***"

    }

)
let uploadfile= async(file)=>{
    return new Promise(async function(resolve,reject){
        let s= new aws.S3({apiVersion:"2007-05-08"})
        var uploadParam={
            ACL:"public",
            Bucke:"company",
            key:"abi/"+file.originalfilename,
            body:file.buffer
        }
        s.upload(uploadParamss,function(err,data){
            if(err){
                return reject({"eror":err})
            }
            return resoleve(data.Location)
        })
    })
}
module.exports= uploadfile