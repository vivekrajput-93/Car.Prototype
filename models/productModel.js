const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    mark : {
        type : String,
        required : true,
    },
    slug : {
        type : String,
        required : true
    },
    year : {
        type: Number,
        required: true
    },
    photo : {
        data : Buffer,
        contentType : String
    },
    category : {
        type: mongoose.ObjectId,
        ref : "Category",
        required : true,
    },
    doors : {
        type : Number,
        required : true,
    },
    transmission : {
        type: String,

    },
    fuel : {
        type : String,
        required : true
    },
    ac : {
        type : Boolean
    }
}, {timestamps : true})


const Product = mongoose.model("Product", productSchema);

module.exports = Product;