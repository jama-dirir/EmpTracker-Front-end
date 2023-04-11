const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        const decryptedToken=jwt.verify(token,process.env.SECRET_TOKEN);
        console.log("Decr :",decryptedToken)
        req.body.userId=decryptedToken.userId;
    } catch (error) {
       throw Error(error.message)
    }
}