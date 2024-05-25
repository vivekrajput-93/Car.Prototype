const productModel = require("../models/productModel");

class ProductRepository {
  async create(data) {
    try {
      const product = new productModel(data);
      await product.save();
      return product;
    } catch (error) {
      console.log(error);
      console.log("Somethin went wrong !");
    }
  }

  async findAll() {
    try {
      const product = await productModel
        .find({})
        .populate("category")
        .select("-photo")
        .limit(12)
        .sort({ createdAt: -1 });
      return product;
    } catch (error) {
      console.log(error);
      console.log("somethin went wrong at repo layer");
    }
  }

  async findBySlug(slug) {
    try {
      const product = await productModel
        .findOne({ slug })
        .select("-photo")
        .populate("category");
      return product;
    } catch (error) {
      console.log(error);
      console.log("somethin went wrong at repo layer");
    }
  }
}

module.exports = ProductRepository;
