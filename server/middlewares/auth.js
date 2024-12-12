const jwt = require("jsonwebtoken")
require("dotenv").config();

//auth
exports.auth = async (req,res,next) =>{
    try{

        //console.log(req.body);
        const {token} = req.body;
       const  token1 = JSON.stringify(token);
        console.log(token1);
        if(!token1)
        {
            return res.status(401).json({
                success:false,
                message:"token is missing"
            })
        }

        try{

            const decode = jwt.verify(token1,process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;

        }catch(e){
            return res.status(401).json({
                success:false,
                message:"error in verifying token"
            })
        }
        next();

    }catch(e){
        console.log(e.message)
        return res.status(401).json({
            success:false,
            message:"error in auth middleware"
        })

    }
}