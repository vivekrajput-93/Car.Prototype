const ProductRepository = require("../repository/product-repository");
const fs = require("fs")

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
      console.log("somethin went wrong at service layer");
    }
  }

  async getSingleProduct(slug) {
    try {
      const product = await this.productRepository.findBySlug(slug);
      return product;
    } catch (error) {
      console.log(error);
      console.log("somethin went wrong at service layer");
    }
    
  }

  async getProductPhoto(productId) {
    try {
      const product = await this.productRepository.findById(productId);
      return product;
    } catch (error) {
      console.log(error);
      console.log("something went wrong at service layer");
    }
  }

  async deleteProduct(pid) {
    try {
      const product = await this.productRepository.deleteById(pid);
      return product;
    } catch (error) {
      console.log(error);
      console.log("something went wrong at service layer");
    }
  }

  async updateProduct(pid, fields, photo) {
    try {
      const updateFields = { ...fields };
      if (photo) {
        updateFields.photo = {
          data: fs.readFileSync(photo.path),
          contentType: photo.type,
        };
      }
      const product = await this.productRepository.updateById(pid, updateFields);
      return product;
    } catch (error) {
      console.log(error);
      console.log("Error in service layer")
    }
  }
}

module.exports = ProductService;
