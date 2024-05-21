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
}

module.exports = CategoryService;
