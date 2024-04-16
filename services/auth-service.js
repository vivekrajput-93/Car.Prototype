const { JWT_SECRET } = require("../config/ServerConfig");
const { comparePassword } = require("../helper/authHelper");
const User = require("../models/userModel");
const UserRepository = require("../repository/auth-repository");
const JWT = require("jsonwebtoken");

class AuthService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong while creating user", error);
      throw error;
    }
  }

  async signIn(data) {
    try {
      const user = await this.userRepository.getUserByEmail(data.email);
      if (!user) {
        throw { error: "User not found !" };
      }

      const matchPassword = comparePassword(data.password, user.password);
      if (!matchPassword) {
        throw { error: "Password was not found !" };
      }
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      return {
        success: true,
        token,
        user
      };
    } catch (error) {
      console.log("Something went wrong !");
      throw error;
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
