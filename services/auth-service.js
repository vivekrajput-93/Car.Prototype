const { JWT_SECRET } = require("../config/ServerConfig");
const { comparePassword, hashPassword } = require("../helper/authHelper");
const User = require("../models/userModel");
const UserRepository = require("../repository/auth-repository");
const JWT = require("jsonwebtoken");

class AuthService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const existingUser = await this.userRepository.create({
        email: data.email,
      });

      if (existingUser) {
        return {
          success: false,
          message: "User already exists, please login!",
        };
      }

      const hashedPassword = await hashPassword(data.password);

      const newUser = await this.userRepository.create({
        username: data.username,
        email: data.email,
        password: hashedPassword,
      });

      return {
        success: true,
        message: "Successfully created User!",
        data: newUser,
        error: {},
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Unable to create user",
        data: {},
        error,
      };
    }
  }

  async signIn(email, plainPassword) {
    try {
      const user = await this.userRepository.getUserByEmail(email);

      if (!user) {
        return {
          success: false,
          message: "User not found, please register",
        };
      }

      const passwordMatch = await comparePassword(plainPassword, user.password);

      if (!passwordMatch) {
        return {
          success: false,
          message: "Incorrect password",
        };
      }

      const token = await this.createToken({ email: user.email, id: user.id });

      return {
        success: true,
        message: "Successfully logged in!",
        token,
        user,
        error: {},
      };
    } catch (error) {
      console.error("Error in signIn method:", error);
      return {
        success: false,
        message: "Unable to login, please try again",
        data: {},
        error,
      };
    }
  }

  async destroy(userId) {
    try {
      const response = await this.userRepository.destroy({ _id: userId });
      return true;
    } catch (error) {
      console.log("Something went wrong with service layer");
      throw error;
    }
  }

  async get(userId) {
    try {
      const user = await this.userRepository.get(userId);
      return user;
    } catch (error) {
      console.log("Something went wrong with service layer");
      throw error;
    }
  }

  async createToken(userId) {
    try {
      const token = JWT.sign({ _id: userId }, JWT_SECRET, {
        expiresIn: "7d",
      });
      return token;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw error;
    }
  }



}

module.exports = AuthService;
