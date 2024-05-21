const CategoryService = require("../services/category-service");

const categoryService = new CategoryService();


const createCategory = async(req, res) => {
    try {
        const {name} = req.body;
        if(!name) {
            return res.status(400).send({ message: "Category name is required" });
        }

        const category = await categoryService.createCategory({name});
        return res.status(200).send({
            success : true,
            message : "New Category is created",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message : "Somethin went wrong in controller layer",
            err : error
        })
    }
}

module.exports = {
    createCategory
}