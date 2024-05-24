const ProductRepository = require("../repository/product-repository");

class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }


    async createProduct(data) {
        try {
            const product = await this.productRepository.create(data);
            return product;
        } catch (error) {
            console.log(error);
            console.log("somethin went wrong at service layer");
        }
    }
}


module.exports = ProductService ;

