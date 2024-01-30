const User = require("../models/userModel");
const UserService = require("../services/auth-service");
const {hashPassword} = require("../helper/authHelper");

const userService = new UserService();

const create = async (req, res) => {
    try {
        // Check if the user already exists
        const existUser = await User.findOne({ email: req.body.email});
        
        if (existUser) {
            return res.status(200).json({
                success: false,
                message: "User already exists, please login!",
            });
        }
        // hasinhg password
        const hashedPassword = await hashPassword(req.body.password);

        // Create a new user if the user doesn't exist
        const newUser = await userService.create({
            username: req.body.username,
            email: req.body.email,
            password : hashedPassword,
        });

        return res.status(201).json({
            success: true,
            message: "Successfully created User!",
            data: newUser,
            err: {},
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Unable to create user",
            data: {},
            err: error,
        });
    }
};

const signIn = async(req, res) => {
    try {

        const user = await userService.signIn( {
            email: req.body.email,
            password : req.body.password
        })
        return res.status(200).json({
            success : true,
            message : "Successfully logined !",
            data : user,
            err : {},
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Unable to login , please try again",
            data : {},
            err : error
        })
    }
}

module.exports = {
    create,
    signIn
};
