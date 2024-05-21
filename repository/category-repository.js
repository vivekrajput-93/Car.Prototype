const categoryModel = require("../models/categoryModel");
const slugify = require("slugify");

class CategoryRepository {
  async create(data) {
    try {
      const category = new categoryModel({ name: data.name, slug: slugify(data.name) });
      await category.save();
      return category;
    } catch (error) {
      console.log("Something went wrong at the Repo layer");
      throw error;
    }
  }

  async findByName(name) {
    try {
      const category = await categoryModel.findOne({ name }); // Correctly passing name as a string
      return category;
    } catch (error) {
      console.log("Something went wrong at the Repo layer");
      throw error;
    }
  }

    async findAndUpdate(id, data) {
      try {
        const category = await categoryModel.findByIdAndUpdate(id, data, {new:true});
        return category
      } catch (error) {
        console.log("Something went wrong at Repo layer");
        throw error;
      }
    }


    async findAll() {
      try {
        const categories = await categoryModel.find({});
        return categories;
        
      } catch (error) {
        console.log("somthing went wrong at Repo layer");
        throw error;
      }
    }

    async findBySlug(slug) {
      try {
        const category = await categoryModel.findOne({slug});
        return category;
      } catch (error) {
        console.log("somethin went wrong at repo layer");
        throw error;
      }
    }

    async  deleteById(id) {
      try {
        const deleteCategory = await categoryModel.findByIdAndDelete(id);
      } catch (error) {
        console.log('somethin went wrong at repo layer');
        throw error;
      }
    }
 
}

module.exports = CategoryRepository;
