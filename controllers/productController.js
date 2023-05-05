const Product = require("../models/ProductModal");
const { success, error } = require("../utils/responseWrapper");

exports.createProduct = async (req, res) => {
  try {
    const { name, description, stock, price, category, longDescription , images} =
      req.body;
    const product = await Product.create({
      name,
      description,
      stock,
      price,
      category,
      longDescription,
      images
    });

    await product.save();

    res.send(success(200, product));
  } catch (e) {
    res.send(error(500, e.message));
    console.log("Error Occured", e.message);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const allProduct = await Product.find();

    res.send(success(200, allProduct));
  } catch (e) {
    res.send(error(500, e.message));
  }
};
