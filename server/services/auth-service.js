const { JWT_SECRET } = require("../config/ServerConfig");
const { comparePassword } = require("../helper/authHelper");
const User = require("../models/userModel");
const UserRepository = require("../repository/auth-repository");
const JWT = require("jsonwebtoken");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const users = await this.userRepository.create(data);
      return users;
    } catch (error) {
      console.log("Somethin went wrong with service layer");
      throw error;
    }
  }

  async signIn(data) {
    try {
      const user = await this.getUserByEmail(data.email);
      if (!user) {
        console.log("User not found");
        throw { error: "User not found, please register" };
      }
      const passwordMatch = await comparePassword(data.password, user.password);
      if (!passwordMatch) {
        console.log("Incorrect password");
        throw { error: "Incorrect password" };
      }

      const newToken = await this.createToken({ _id: data.id });
      return newToken;
    } catch (error) {
      console.error("Error in signIn method:", error);
      throw error;
    }
  }




  async destroy(userId) {
    try {
      const response = await this.userRepository.destroy({ _id: userId });
      return true;
    } catch (error) {
      console.log("Somethin went wrong with service layer");
      throw error;
    }
  }



  async get(userId) {
    try {
      const users = await this.userRepository.get(userId);
      return users;
    } catch (error) {
      console.log("Somethin went wrong with service layer");
      throw error;
    }
  }




  async createToken(userId) {
    try {
      const token = await JWT.sign({ _id: userId }, JWT_SECRET, {
        expiresIn: "7d",
      });
      return token;
    } catch (error) {
      console.log("somethin went wrong at service layer");
      throw error;
    }
  }


  

  async getUserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (error) {
      console.log("somethin went wrong at service layer");
      throw error;
    }
  }
}

module.exports = UserService;
