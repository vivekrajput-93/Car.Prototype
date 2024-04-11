const User = require("../models/userModel");



class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong at Repo layer");
            throw error;
        }
    }


    async destroy (userId) {
        try {
            const response = await User.findByIdAndDelete(userId);
            return true
        } catch (error) {
            console.log("Somethin went wrong at Repo layer");
            throw error;
        }
    }


    async get(userId) {
        try {
            const user = await  User.findById(userId);
        } catch (error) {
            console.log("Somethin went wrong at Repo layer");
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const user = await User.findOne({
                where: { email },
            });
            return user;
        } catch (error) {
            console.log("error occurred in UserRepo.getUserByEmail: ", error);
            throw error;
        }
    }
    
    
}

module.exports = UserRepository;