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

    async getProduct() {
        try {
            const product = await this.productRepository.findAll();
            return product;
        } catch (error) {
            console.log(error);
            console.log("somethin went wrong at service layer")
        }
    }

    async getSingleProduct(slug) {
        try {
            const product = await this.productRepository.findBySlug(slug);
            return product
        } catch (error) {
            console.log(error);
            console.log("somethin went wrong at service layer")
        }
    }


    async getProductPhoto(productId) {
        try {
            const product = await this.productRepository.findById(productId);
            return product
        } catch (error) {
            console.log(error);
            console.log("something went wrong at service layer")
        }
    }
}


module.exports = ProductService ;

