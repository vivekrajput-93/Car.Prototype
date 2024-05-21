const Category = require("../models/categoryModel");
const slugify = require("slugify");

class CategoryRepository {
  async create(data) {
    try {
      const category = new Category({ name: data.name, slug: slugify(data.name) });
      await category.save();
      return category;
    } catch (error) {
      console.log("Something went wrong at the Repo layer");
      throw error;
    }
  }

  async findByName(name) {
    try {
      const category = await Category.findOne({ name }); // Correctly passing name as a string
      return category;
    } catch (error) {
      console.log("Something went wrong at the Repo layer");
      throw error;
    }
  }
}

module.exports = CategoryRepository;
