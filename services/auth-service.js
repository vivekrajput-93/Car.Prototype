
const { comparePassword } = require("../helper/authHelper");
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


  async getUserByEmail(email) {
    try {
      const user = this.userRepository.findBy({email});
      return user;
    } catch (error) {
      
    }
  }



  async signIn(data) {
    try {
      const user = await this.getUserByEmail(data.email);
      if (!user) {
        throw { error: "User not found !" };
      }

      const match = await comparePassword(data.password, user.password);
      if (!match) {
        throw { message : "Invalid Password"}
      }

      const token = user.genJWT();
      return {
        user, token
      }
    } catch (error) {
      console.log("Something went wrong vivek !");
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
      throw error; // Return the error to propagate it to the caller
    }
  }


}

module.exports = AuthService;
