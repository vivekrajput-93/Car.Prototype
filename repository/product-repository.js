const { default: mongoose } = require("mongoose");
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


  async findById(productId) {
    try {
      if(!productId || !mongoose.Types.ObjectId.isValid(productId)) {
        throw new Error("Invalid Product Id")
      }

      const product = await productModel.findById(productId).select("photo");
      return product
    } catch (error) {
      console.log(error);
      console.log("something went wrong at repo layer")
    }
  }


  async deleteById(pid) {
    try {
      const product = await productModel.deleteOne(pid);
      return product
    } catch (error) {
      console.log(error);
      console.log("somethin went wrong at service layer");
    }
  }

  async updateById(pid, data){
    try {
      const product = await productModel.findByIdAndUpdate(pid, data, {new : true});
      return product
    } catch (error) {
      console.log(error);
      console.log('Error in repo layer')
    }
  } 
}



module.exports = ProductRepository;
