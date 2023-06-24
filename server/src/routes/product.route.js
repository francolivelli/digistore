const express = require("express");
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  uploadImages,
  deleteImages,
} = require("../controllers/product.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImage");
const router = express.Router();

// CREATE PRODUCT
router.post("/", authMiddleware, isAdmin, createProduct);

// UPLOAD PRODUCT IMAGES
router.put(
  "/upload",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

// UPLOAD PRODUCT IMAGES
router.delete(
  "/delete-img/:id",
  authMiddleware,
  isAdmin,
  deleteImages
);

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
