const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect(["admin"]), createProduct);
router.get("/", protect(["admin", "manager"]), getProducts);
router.put("/:id", protect(["admin", "manager"]), updateProduct);
router.delete("/:id", protect(["admin"]), deleteProduct);

module.exports = router;
