const { default: slugify } = require("slugify");
const CategoryRepository = require("../repository/category-repository");

class CategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async createCategory(data) {
    try {
      const existingCategory = await this.categoryRepository.findByName(data.name);
      if (existingCategory) {
        throw new Error("Category already exists");
      }
      const category = await this.categoryRepository.create(data);
      return category;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }


  async updateCategory(id, name) {
    try {
      const updatedData = { name, slug: slugify(name) };
      const category = await this.categoryRepository.findAndUpdate(id, updatedData);
      return category;
    } catch (error) {
      console.log("Something went wrong at Service layer");
      throw error;
    }
  }


  async getAllCategories() {
    try {
      const categories = await this.categoryRepository.findAll();
      return categories;
    } catch (error) {
      console.log("Something went wrong at serivce layer");
      throw error;
    }
  }


  async getCategory(slug) {
    try {
      const category = await this.categoryRepository.findBySlug(slug);
      return category
    } catch (error) {
      console.log("somethin went wronf at service layer ");
      throw error;
  }
}


  async deleteCategory(id) {
    try {
      const category = await this.categoryRepository.deleteById(id);
    } catch (error) {
      console.log("somethin went wrong at service layer");
      throw error;
    }
  }

}

module.exports = CategoryService;
