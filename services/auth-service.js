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
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong while creating user", error);
      throw error;
    }
  }





  async signIn(email, plainPassword) {
    try {
      const user = await this.userRepository.getUserByEmail(email);
      if (!user) {
        throw { error: "User not found " };
      }

      console.log(user);

      const passwordMatch = comparePassword(plainPassword, user.password);

      if (!passwordMatch) {
        throw { error: "Password not matched!" };
      }

      const token = this.createToken({ email: user.email, id: user.id });
      return {
        token,
        user,
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
