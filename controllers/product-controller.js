const { default: slugify } = require("slugify");
const ProductService = require("../services/product-service");
const fs = require("fs");

const productService = new ProductService();

const createProduct = async (req, res) => {
  try {
    const { mark, year, category, doors, transmission, fuel, ac } = req.fields;
    const { photo } = req.files;

    // Validation
    switch (true) {
      case !mark:
        return res.status(400).send({ error: "Name is required" });
      case !year:
        return res.status(400).send({ error: "Description is required" });
      case !doors:
        return res.status(400).send({ error: "Price is required" });
      case !category:
        return res.status(400).send({ error: "Category is required" });
      case !transmission:
        return res.status(400).send({ error: "Quantity is required" });
      case !fuel:
        return res.status(400).send({ error: "fuel is required" });
      case !ac:
        return res.status(400).send({ error: "AC is required" });
      case photo && photo.size > 1000000:
        return res
          .status(400)
          .send({ error: "Photo size should be less than 1MB" });
    }

    const slug = slugify(mark);
    const productData = {
      mark,
      year,
      category,
      doors,
      transmission,
      fuel,
      ac,
      slug,
    };

    if (photo) {
      productData.photo = {
        data: fs.readFileSync(photo.path),
        contentType: photo.type,
      };
    }

    const product = await productService.createProduct(productData);

    res.status(201).send({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log("Error in createProductController:", error);
    res.status(500).send({
      success: false,
      message: "Error in creating product",
      error: error.message,
    });
  }
};
module.exports = {
  createProduct,
};
