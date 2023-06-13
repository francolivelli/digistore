const express = require("express");
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
isAdmin;
const router = express.Router();

// CREATE PRODUCT
router.post("/", authMiddleware, isAdmin, createProduct);

// GET PRODUCT
router.get("/:id", getProduct);

// GET PRODUCTS
router.get("/", getProducts);

// UPDATE PRODUCT
router.put("/:id", authMiddleware, isAdmin, updateProduct);

// DELETE PRODUCT
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
