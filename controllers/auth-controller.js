const User = require("../models/userModel");
const UserService = require("../services/auth-service");
const { hashPassword } = require("../helper/authHelper");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, PASSWORD } = require("../config/ServerConfig");
const nodemailer = require("nodemailer");

const userService = new UserService();

const create = async (req, res) => {
  try {
    // Check if the user already exists
    const existUser = await User.findOne({ email: req.body.email });

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
      password: hashedPassword,
    });

    return res.status(201).send({
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

const login = async (req, res) => {
  try {
    const token = await userService.signIn(req.body);
    return res.status(200).json({
      success: true,
      message: "Successfully logined in",
      user: token,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Unable to login",
      data: {},
      err: error,
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found !" });
    }

    const userToken = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "viveksinghraajputt@gmail.com",
        pass: "lfta ojwt xdmh uvms",
      },
    });

    var mailOptions = {
      from: "viveksinghraajputt@gmail.com",
      to: user.email,
      subject: "Reset Password Link",
      text: `http://localhost:3000/reset-password/${user._id}/${userToken}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.status(500).json({ Status: "Failed to send email" });
      } else {
        return res.status(200).json({ Status: "Success" });
      }
    });
  } catch (error) {
    console.log(error);
    console.log("Something went wrong at forgot password controllor");
  }
};

const resetPassword = async (req, res) => {
  try {
    const { id, token } = req.params;
    const { password } = req.body;

    console.log("Received ID:", id);
    console.log("Received Token:", token);
    console.log("Received Password:", password);

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
      if (err) {
        console.error("Error with token:", err);
        return res.status(400).json({ Status: "Error with token" });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);

        await userService.update(id, { password: hashedPassword });
        return res.status(200).json({ Status: "Success" });
      }
    });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    return res.status(500).json({ Status: "Error", message: error.message });
  }
};

// test api
const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};


module.exports = {
  create,
  login,
  forgotPassword,
  resetPassword,
  testController
};
