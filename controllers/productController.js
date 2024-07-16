const Product = require("../models/product");

//@description     Create new Product
//@route           POST /api/products/
//@access          admin
exports.createProduct = async (req, res) => {
  const { title, description, inventoryCount } = req.body;

  try {
    const product = new Product({ title, description, inventoryCount });
    await product.save();
    res.status(201).json({ message: "Product created  successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//@description      Get all Product
//@route           GET /api/products/
//@access          admin , manager
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//@description      Update Product with id
//@route           PUT /api/products/:id
//@access          admin , manager
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//@description      Delete Product with id
//@route           DELETE /api/products/:id
//@access          admin
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
