const { default: mongoose } = require("mongoose");
const CategoryService = require("../services/category-service");

const categoryService = new CategoryService();

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({ message: "Category name is required" });
    }

    const category = await categoryService.createCategory({ name });
    return res.status(200).send({
      success: true,
      message: "New Category is created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Somethin went wrong in controller layer",
      err: error,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Category name is required",
      });
    }

    const category = await categoryService.updateCategory(id, name);

    res.status(200).send({
      success: true,
      message: "Updated category successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong at controllor",
      error,
    });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    return res.status(201).send({
      success: true,
      message: "All Categories is Fetched !",
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Somethin went wrong at controller ",
      err: error,
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await categoryService.getCategory(req.params.slug);
    res.status(200).send({
      success: true,
      message: "Fetched single category successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Something went wrong at controller",
      err: error,
    });
  }
};


const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params;
        const category = await categoryService.deleteCategory(id);
        return res.status(201).send({
            success: true,
            message : "Category is deleted !"
        })
    } catch (error) {
        console.log("somethin went at controller layer");
        res.status(400).send({
            success: false,
            message : "Somethin went wrong at controller",
            err : error
        })
    }
}

module.exports = {
  createCategory,
  updateCategory,
  getAllCategories,
  getCategory,
  deleteCategory
};
