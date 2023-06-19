const express = require("express");
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
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

// ADD TO WISHLIST
router.put("/wishlist", authMiddleware, addToWishlist);

// RATING
router.put("/rating", authMiddleware, rating);

// UPDATE PRODUCT
router.put("/:id", authMiddleware, isAdmin, updateProduct);

// DELETE PRODUCT
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
