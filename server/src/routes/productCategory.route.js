const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getCategories,
} = require("../controllers/productCategory.controller");
const { authMiddleware, isAdmin } = require("../middlewares/auth.middleware");
const router = express.Router();

// CREATE CATEGORY
router.post("/", authMiddleware, isAdmin, createCategory);

// UPDATE CATEGORY
router.put("/:id", authMiddleware, isAdmin, updateCategory);

// DELETE CATEGORY
router.delete("/:id", authMiddleware, isAdmin, deleteCategory);

// GET CATEGORY
router.get("/:id", getCategory);

// GET CATEGORIES
router.get("/", getCategories);

module.exports = router;
