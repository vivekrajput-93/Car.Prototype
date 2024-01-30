const mongoose = require("mongoose");
const { MONGO_URL } = require("./ServerConfig");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(MONGO_URL);
        console.log(`connected to database to ${conn.connection.host}`)
    } catch (error) {
        console.log("Error in Mongodb connecction")
        throw error;
    }
}

module.exports = connectDB;