const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../config/ServerConfig");
const JWT = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type: String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : Number,
        default : 0
    }
}, {timestamps : true})



userSchema.methods.genJWT = function generate() {
    return JWT.sign({id: this._id, email : this.email}, JWT_SECRET, {expiresIn : "1h"});
}

const User = mongoose.model("User", userSchema);
module.exports = User;