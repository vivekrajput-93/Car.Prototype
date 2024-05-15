const JWT_SECRET = require("../config/ServerConfig")
const JWT = require("jsonwebtoken");

const User = require("../models/userModel");

const validateAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success : false,
            data : {},
            message : "Somethin went wrong !",
            err : "Email or password missing in the  request"
        })
    }
    next()
}


const requiredSignIn = async(req, res, next) => {
    try {
       const decode = JWT.verify(req.headers.authorization, JWT_SECRET);
       req.user = decode;
       next();
    } catch (error) {
       console.log(error)
    }
   }

   const isAdmin = async(req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1) {
            return res.status(401).send({
                success:false,
                message:"UnAuthorised Access"
            });
        } else {
            next();
        } 
    } catch(error) {
        console.log(error)
        res.status(401).send({
            success:true,
            message : "Error in admin middlware",
            error
        })
    }
} 


module.exports = {
    validateAuth,
    isAdmin,
    requiredSignIn
}