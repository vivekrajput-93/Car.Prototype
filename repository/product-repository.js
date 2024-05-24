const productModel = require("../models/productModel");

class ProductRepository {

    
    async create(data) {
        try {
            const product = new productModel(data);
            await product.save();
            return product;
        } catch (error) {
            console.log(error);
            console.log("Somethin went wrong !")
        }
    }
}

module.exports = ProductRepository;