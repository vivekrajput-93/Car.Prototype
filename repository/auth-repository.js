const  User  = require("../models/userModel");
const CrudRepository = require("./crud-repository");



class UserRepository  {


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
            const user = await User.findById(userId);
            return user; // Return the user data
        } catch (error) {
            console.log("Something went wrong at Repo layer");
            throw error;
        }
    }
    
    async findBy(email) {
        try {
            const user = await User.findOne(email);
            return user; 
        } catch (error) {
            console.log("Something went wrong at Repo layer");
            throw error;
        }
    }


    async update(data) {
        try {
            const user = await User.findByIdAndUpdate(data);
            return user;
        } catch (error) {
            console.log("Something went wrong at Repo layer");
            throw error;
        }
    }
    
    
}

module.exports = UserRepository;